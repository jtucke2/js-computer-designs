import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MatTabsModule, MatExpansionModule, MatInputModule, MatCheckboxModule, MatButtonModule, MatRadioModule, MatStepperModule, MatSelectModule } from '@angular/material';
import { AdminService } from './admin.service';
import { PlatformsComponent } from './platforms/platforms.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManufacturersComponent } from './manufacturers/manufacturers.component';
import { CategoriesComponent } from './categories/categories.component';
import { ComponentsComponent } from './components/components.component';
import { ComponentsListComponent } from './components-list/components-list.component';
import { ComponentFormComponent } from './component-form/component-form.component';
import { AddPlatformDialogComponent } from './platforms/add-platform-dialog/add-platform-dialog.component';
import { AddComponentDialogComponent } from './platforms/add-component-dialog/add-component-dialog.component';
import { CreateComponentDialogComponent } from './components/create-component-dialog/create-component-dialog.component';
import { AddManufacturerDialogComponent } from './manufacturers/add-manufacturer-dialog/add-manufacturer-dialog.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [
    LayoutComponent,
    PlatformsComponent,
    ManufacturersComponent,
    CategoriesComponent,
    ComponentsComponent,
    ComponentsListComponent,
    ComponentFormComponent,
    AddPlatformDialogComponent,
    AddComponentDialogComponent,
    CreateComponentDialogComponent,
    AddManufacturerDialogComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatRadioModule,
    MatStepperModule,
    MatSelectModule,
  ],
  providers: [
    AdminService
  ],
  entryComponents: [
    AddPlatformDialogComponent,
    AddComponentDialogComponent,
    CreateComponentDialogComponent,
    AddManufacturerDialogComponent,
  ],
  exports: [
    AddPlatformDialogComponent,
    AddComponentDialogComponent,
    CreateComponentDialogComponent,
    AddManufacturerDialogComponent,
  ]
})
export class AdminModule { }
