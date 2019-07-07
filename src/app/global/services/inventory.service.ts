import { Injectable } from '@angular/core';
import { BasePlatform, BasePlatformD } from '../models/base-platform';
import { ComputerComponent, ComponentManufacturer, ComponentCategory, ComponentD } from '../models/component';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { InventoryHelpers } from '../helpers/inventory-helpers';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  // ~~~ Normalized Data Structures ~~~
  public componentManufacturers$ = new BehaviorSubject<ComponentManufacturer[]>([]);
  public componentCategories$ = new BehaviorSubject <ComponentCategory[]>([]);
  public components$ = new BehaviorSubject <ComputerComponent[]>([]);
  public platforms$ = new BehaviorSubject<BasePlatform[]>([]);


  // ~~~ Denormalized Data Structures ~~~
  public fullComponents$: Observable<ComponentD[]>;
  public fullPlatforms$: Observable<BasePlatformD[]>;
  public activePlatforms$: Observable<BasePlatformD[]>;

  // ~~~ Populate Normalized Data Structures ~~~
  get componentManufacturers(): ComponentManufacturer[] {
    return this.componentManufacturers$.getValue();
  }

  set componentManufacturers(componentManufacturers: ComponentManufacturer[]) {
    this.componentManufacturers$.next(componentManufacturers);
  }

  get componentCategories(): ComponentCategory[] {
    return this.componentCategories$.getValue();
  }

  set componentCategories(componentCategories: ComponentCategory[]) {
    this.componentCategories$.next(componentCategories);
  }

  get components(): ComputerComponent[] {
    return this.components$.getValue();
  }

  set components(components: ComputerComponent[]) {
    this.components$.next(components);
  }

  get platforms(): BasePlatform[] {
    return this.platforms$.getValue();
  }

  set platforms(platforms: BasePlatform[]) {
    this.platforms$.next(platforms);
  }

  constructor() {
    // ~~~ Manufacturers and Cateogies first ~~~
    this.componentManufacturers = InventoryHelpers.initComponentManufacturers();
    this.componentCategories = InventoryHelpers.initComponentCategories();

    // ~~~ Components second ~~~
    this.components = InventoryHelpers.initComponents();

    // ~~~ Base Platforms last ~~~
    this.platforms = InventoryHelpers.initBasePlatforms();

    // ~~~ Generate Denormalized Data Structures ~~~
    this.fullComponents$ = combineLatest(
        this.componentManufacturers$,
        this.componentCategories$,
        this.components$
      )
      .pipe(
        map(([componentManufacturers, componentCategories, components]) => {
          return components.map(comp => {
            const retVal: ComponentD = {
              ...comp,
              manufacturer: null,
              category: null
            };
            const manu = componentManufacturers.find(m => m.name === comp.manufacturer);
            retVal.manufacturer = manu;
            const category = componentCategories.find(cat => cat.name === comp.category);
            retVal.category = category;
            return retVal;
          });
        })
      );

    this.fullPlatforms$ = combineLatest(
      this.platforms$,
      this.fullComponents$
    )
    .pipe(
      map(([platforms, components]) => {
        return platforms.map(plat => {
          const retVal: BasePlatformD = {
            ...plat,
            components: null,
            startingPrice: 0
          };
          const compsD: { [s: string]: ComponentD[] } = {};

          // ~~~ Denormalized Components ~~~
          // tslint:disable-next-line: forin
          for (const category in plat.components) {
            compsD[category] = plat.components[category].map(c => components.find(comp => comp.modelNumber === c));
          }

          retVal.components = compsD;

          // ~~~ Calculate sum of base components ~~~
          retVal.startingPrice += Object.entries(plat.defaultComponents)
            .map(([cat, modNum]) => {
              const found = compsD[cat].find(c => c.modelNumber === modNum);
              return found.salePrice;
            })
            .reduce((acc, curr) => acc + curr, 0);

          retVal.startingPrice += plat.baseSalePrice;

          return retVal;
        });
      })
    );

    // ~~~ Generate filtered data structures ~~~
    this.activePlatforms$ = this.fullPlatforms$
      .pipe(
        map(ps => ps.filter(p => p.active))
      );
  }
}
