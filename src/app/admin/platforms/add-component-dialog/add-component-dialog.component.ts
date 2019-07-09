import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Subject } from 'rxjs';
import { InventoryService } from 'src/app/global/services/inventory.service';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { SnackbarService } from 'src/app/global/services/snackbar.service';

@Component({
  selector: 'add-component-dialog',
  templateUrl: './add-component-dialog.component.html',
  styleUrls: ['./add-component-dialog.component.scss']
})
export class AddComponentDialogComponent implements OnInit {
  public form = new FormControl([]);
  public category: string;
  public components$;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddComponentDialogComponent>,
    private inventoryService: InventoryService,
    private sbs: SnackbarService,
  ) { }

  ngOnInit() {
    const { category, components } = this.data;
    this.category = category;
    const includedCompIds = components ? components.map(c => c.modelNumber) : [];
    this.components$ = this.inventoryService.fullComponents$
      .pipe(
        map(comps => {
          return comps.filter(c => c.category === category && !includedCompIds.includes(c.modelNumber));
        })
      );
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    if (this.form.value && this.form.value.length) {
      const { category, platformId } = this.data;
      const platforms = this.inventoryService.platforms;
      const platformIdx = platforms.findIndex(p => p.id === platformId);
      if (!platforms[platformIdx].components[category]) {
        platforms[platformIdx].components[category] = [];
      }
      platforms[platformIdx].components[category].push(...this.form.value);
      this.inventoryService.platforms = platforms;
      this.dialogRef.close();
      this.sbs.openSnackbar(`Added ${category}(s) to Platform`);
    }
  }

}
