import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatCardModule } from '@angular/material';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { JscFooterComponent } from './components/jsc-footer/jsc-footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LandingPageComponent,
    NavigationComponent,
    JscFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    LandingPageComponent,
    NavigationComponent,
    JscFooterComponent
  ]
})
export class GlobalModule { }
