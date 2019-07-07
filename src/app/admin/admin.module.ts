import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MatTabsModule, MatExpansionModule, MatInputModule, MatCheckboxModule, MatButtonModule, MatRadioModule, MatStepperModule } from '@angular/material';
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

@NgModule({
  declarations: [
    LayoutComponent,
    PlatformsComponent,
    ManufacturersComponent,
    CategoriesComponent,
    ComponentsComponent,
    ComponentsListComponent,
    ComponentFormComponent,
    AddPlatformDialogComponent
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
  ],
  providers: [
    AdminService
  ],
  entryComponents: [
    AddPlatformDialogComponent
  ],
  exports: [
    AddPlatformDialogComponent
  ]
})
export class AdminModule { }
