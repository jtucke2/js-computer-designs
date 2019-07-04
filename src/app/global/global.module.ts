import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule } from '@angular/material';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { JscFooterComponent } from './components/jsc-footer/jsc-footer.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    NavigationComponent,
    JscFooterComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    LandingPageComponent,
    NavigationComponent,
    JscFooterComponent
  ]
})
export class GlobalModule { }
