import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InventoryService } from '../../../global/services/inventory.service';
import { SnackbarService } from '../../../global/services/snackbar.service';
import { Category, CategorySpecificationFields } from '../../../global/models/categories.enum';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'create-component-dialog',
  templateUrl: './create-component-dialog.component.html',
  styleUrls: ['./create-component-dialog.component.scss']
})
export class CreateComponentDialogComponent implements OnInit {
  public category: Category;
  public specificationFields: string[] = [];
  public form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateComponentDialogComponent>,
    public inventoryService: InventoryService,
    private sbs: SnackbarService,
  ) {}

  ngOnInit() {
    this.category = this.data.category;
    this.specificationFields = CategorySpecificationFields[this.category];
    const specArrayForm = new FormArray(
      this.specificationFields
        .map(sf => new FormGroup({
          name: new FormControl(sf),
          value: new FormControl('', Validators.required)
        }))
    );
    this.form = new FormGroup({
      manufacturer: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      modelNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl(0, Validators.required),
      salePrice: new FormControl(0, Validators.required),
      inventoryLevel: new FormControl(0, Validators.required),
      requiredPower: new FormControl(0, Validators.required),
      specificationFields: specArrayForm
    });
  }

  public getFormArray(): FormArray {
    return this.form.get('specificationFields') as FormArray;
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    const comp = {
      ...this.form.value,
      category: this.category
    };

    const components = this.inventoryService.components;
    components.push(comp);
    this.inventoryService.components = components;
    this.dialogRef.close();
    this.sbs.openSnackbar(`Added ${this.category} Component`);
  }

}
