import { Injectable } from '@angular/core';
import { BasePlatform, BasePlatformD } from '../models/base-platform';
import { ComputerComponent, ComponentManufacturer, ComponentD } from '../models/component';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { InventoryHelpers } from '../helpers/inventory-helpers';
import { Category, Categories } from '../models/categories.enum';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  // ~~~ Normalized Data Structures ~~~
  public componentManufacturers$ = new BehaviorSubject<ComponentManufacturer[]>([]);
  public components$ = new BehaviorSubject <ComputerComponent[]>([]);
  public platforms$ = new BehaviorSubject<BasePlatform[]>([]);


  // ~~~ Denormalized Data Structures ~~~
  public fullComponents$: Observable<ComponentD[]>;
  public componentsByCategory$: Observable<{ category: Category, components: ComponentD[] }[]>;
  public fullPlatforms$: Observable<BasePlatformD[]>;
  public activePlatforms$: Observable<BasePlatformD[]>;

  // ~~~ Populate Normalized Data Structures ~~~
  get componentManufacturers(): ComponentManufacturer[] {
    return this.componentManufacturers$.getValue();
  }

  set componentManufacturers(componentManufacturers: ComponentManufacturer[]) {
    localStorage.setItem('componentManufacturers', JSON.stringify(componentManufacturers));
    this.componentManufacturers$.next(componentManufacturers);
  }

  get components(): ComputerComponent[] {
    return this.components$.getValue();
  }

  set components(components: ComputerComponent[]) {
    localStorage.setItem('components', JSON.stringify(components));
    this.components$.next(components);
  }

  get platforms(): BasePlatform[] {
    return this.platforms$.getValue();
  }

  set platforms(platforms: BasePlatform[]) {
    localStorage.setItem('platforms', JSON.stringify(platforms));
    this.platforms$.next(platforms);
  }

  constructor() {
    // ~~~ Manufacturers and Cateogies first ~~~
    this.componentManufacturers = InventoryHelpers.initComponentManufacturers();

    // ~~~ Components second ~~~
    this.components = InventoryHelpers.initComponents();

    // ~~~ Base Platforms last ~~~
    this.platforms = InventoryHelpers.initBasePlatforms();

    // ~~~ Generate Denormalized Data Structures ~~~
    this.fullComponents$ = combineLatest(
        this.componentManufacturers$,
        this.components$
      )
      .pipe(
        map(([componentManufacturers, components]) => {
          return components.map(comp => {
            const retVal: ComponentD = {
              ...comp,
              manufacturer: null
            };
            const manu = componentManufacturers.find(m => m.name === comp.manufacturer);
            retVal.manufacturer = manu;
            return retVal;
          });
        })
      );

    this.componentsByCategory$ = this.fullComponents$
      .pipe(
        map((components) => Categories.map(category => ({ category, components: components.filter(comp => comp.category === category)})))
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
            compsD[category] = plat.components[category]
              .map(c => components.find(comp => comp.modelNumber === c))
              .map(c => ({
                ...c,
                isDefault: plat.defaultComponents[category] === c.modelNumber ? true : false
              }));
          }

          retVal.components = compsD;

          // ~~~ Calculate sum of base components ~~~
          retVal.startingPrice += Object.entries(plat.defaultComponents)
            .map(([cat, modNum]) => {
              const found = compsD[cat].find(c => c.modelNumber === modNum);
              return found && found.salePrice ? found.salePrice : 0;
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
