import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public platformForm;

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
    });
  // TODO handle components
  }
}
