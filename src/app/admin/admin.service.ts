import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from '../global/models/categories.enum';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public platformForm: FormGroup;

  constructor() {
    this.resetPlatformForm();
  }

  public resetPlatformForm() {
    this.platformForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      baseSalePrice: new FormControl(0, Validators.required),
      purchasePrice: new FormControl(0, Validators.required),
      image: new FormControl('', Validators.required),
      active: new FormControl(false),
      components: new FormGroup({
        [Category.CPU]: new FormControl([], Validators.required),
        [Category.GPU]: new FormControl([], Validators.required),
        [Category.RAM]: new FormControl([], Validators.required),
        [Category.HARD_DRIVE]: new FormControl([], Validators.required),
        [Category.PSU]: new FormControl([], Validators.required),
      }),
      defaultComponents: new FormGroup({
        [Category.CPU]: new FormControl('', Validators.required),
        [Category.GPU]: new FormControl('', Validators.required),
        [Category.RAM]: new FormControl('', Validators.required),
        [Category.HARD_DRIVE]: new FormControl('', Validators.required),
        [Category.PSU]: new FormControl('', Validators.required),
      }),
    });
  // TODO handle components
  }
}
