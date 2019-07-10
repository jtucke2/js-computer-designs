import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InventoryService } from '../../../global/services/inventory.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as UUID from 'uuid';
import { AdminService } from '../../admin.service';
import { map, startWith, tap, withLatestFrom } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Category, Categories } from '../../../global/models/categories.enum';
import { SnackbarService } from '../../../global/services/snackbar.service';

@Component({
  selector: 'add-platform-dialog',
  templateUrl: './add-platform-dialog.component.html',
  styleUrls: ['./add-platform-dialog.component.scss']
})
export class AddPlatformDialogComponent implements OnInit {
  public defaultComponentOptions$ = {
    [Category.CPU]: new BehaviorSubject([]),
    [Category.GPU]: new BehaviorSubject([]),
    [Category.RAM]: new BehaviorSubject([]),
    [Category.HARD_DRIVE]: new BehaviorSubject([]),
    [Category.PSU]: new BehaviorSubject([]),
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddPlatformDialogComponent>,
    public inventoryService: InventoryService,
    public adminService: AdminService,
    private sbs: SnackbarService,
  ) {
    this.adminService.platformForm.valueChanges
      .pipe(
        startWith(this.adminService.platformForm.value),
        withLatestFrom(this.inventoryService.components$)
      )
      .subscribe(([{ components }, allComps]) => {
        Categories.forEach((category) => {
          const next = allComps.filter(c => components[category].includes(c.modelNumber));
          this.defaultComponentOptions$[category].next(next);
        });
      });
  }

  ngOnInit() {
  }

  public cancel() {
    this.dialogRef.close();
  }

  public save() {
    const platform = {
      ...this.adminService.platformForm.value,
      id: UUID.v4()
    };
    const platforms = this.inventoryService.platforms;
    platforms.push(platform);
    this.inventoryService.platforms = platforms;
    this.dialogRef.close();
    this.sbs.openSnackbar(`Added ${platform.name} Platform`);
  }

}
