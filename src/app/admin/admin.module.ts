import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MatTabsModule } from '@angular/material';
import { AdminService } from './admin.service';
import { PlatformsComponent } from './platforms/platforms.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutComponent,
    PlatformsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule,
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
