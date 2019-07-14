import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, withLatestFrom, tap, startWith, debounceTime, take, share } from 'rxjs/operators';
import { InventoryService } from '../../global/services/inventory.service';
import { Observable, combineLatest, of } from 'rxjs';
import { BasePlatformD } from '../../global/models/base-platform';
import { Categories, Category } from '../../global/models/categories.enum';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InventoryHelpers } from '../../global/helpers/inventory-helpers';
import { CartService } from '../../global/services/cart.service';
import { SnackbarService } from '../../global/services/snackbar.service';

@Component({
  selector: 'customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {
  public errorMessage = '';
  public platform$: Observable<BasePlatformD>;
  public subTotal: number;
  public categories = Categories;
  public form: FormGroup;
  public selectedPrices;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private inventoryService: InventoryService,
    private cartService: CartService,
    private sbs: SnackbarService,
  ) { }

  ngOnInit() {
    this.resetForm();
    this.resetSelectedPrices();
    this.platform$ = this.route.paramMap
      .pipe(
        withLatestFrom(this.inventoryService.fullPlatforms$),
        map(([params, platforms]) => {
          const id = params.get('id');
          const platform = platforms.find(p => p.id === id);
          if (platform) {
            return platform;
          } else {
            return null;
          }
        }),
        tap((platform) => {
          if (platform) {
            this.errorMessage = '';
            // tslint:disable-next-line: forin
            for (const cat in platform.defaultComponents) {
              this.form.get(cat).patchValue(platform.defaultComponents[cat]);
            }
          } else {
            this.errorMessage = 'Unable to find platform.';
            this.resetSelectedPrices();
            this.resetForm();
          }
        })
      );

    combineLatest(
      this.platform$,
      this.form.valueChanges.pipe(startWith(this.form.value))
    )
    .pipe(
      tap(([p, f]) => {
        Object.entries(f).forEach(([cat, modelNumber]) => {
          const fc = p.components[cat].find(c => c.modelNumber === modelNumber);
          if (fc) {
            this.selectedPrices[cat] = fc.salePrice;
          } else {
            this.selectedPrices[cat] = 0;
          }
        });
      }),
      map(([p, f]) => {
        if (this.form.status !== 'VALID') {
          return p.startingPrice;
        } else {
          return p.baseSalePrice + Object.entries(f)
            .map(([cat, modelNumber]) => {
              if (p.components[cat]) {
                const found = p.components[cat].find(c => c.modelNumber === modelNumber);
                if (found) {
                  return found.salePrice;
                } else {
                  return 0;
                }
              } else {
                return 0;
              }
            })
            .reduce((acc, cur) => acc + cur, 0);
        }
      }),
    )
    .subscribe((st) => this.subTotal = st);
  }

  public compNumToName(modelNumber: string): string {
    const comps = this.inventoryService.components;
    const found = comps.find(c => c.modelNumber === modelNumber);
    if (!found) {
      return ': Make Selection';
    } else {
      return `: ${found.manufacturer} ${found.model}`;
    }
  }

  public addToCart(p: BasePlatformD) {
    const pp = InventoryHelpers.platformDToCartPlatform(p, this.form.value, this.subTotal);
    this.cartService.addItemToCart(pp);
    this.router.navigate(['cart']);
    this.sbs.openSnackbar(`Added ${p.name} Computer to Cart`);
  }

  private resetForm() {
    this.form = new FormGroup({
      [Category.CPU]: new FormControl('', Validators.required),
      [Category.GPU]: new FormControl('', Validators.required),
      [Category.RAM]: new FormControl('', Validators.required),
      [Category.HARD_DRIVE]: new FormControl('', Validators.required),
      [Category.PSU]: new FormControl('', Validators.required),
    });
  }

  private resetSelectedPrices() {
    this.selectedPrices = {
      [Category.CPU]: 0,
      [Category.GPU]: 0,
      [Category.RAM]: 0,
      [Category.HARD_DRIVE]: 0,
      [Category.PSU]: 0,
    };
  }

}
