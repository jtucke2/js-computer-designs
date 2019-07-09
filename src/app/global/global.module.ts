import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatMenuModule, MatIconModule, MatDividerModule, MatSnackBarModule } from '@angular/material';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { JscFooterComponent } from './components/jsc-footer/jsc-footer.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { SnackbarService } from './services/snackbar.service';

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
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule,
  ],
  exports: [
    LandingPageComponent,
    NavigationComponent,
    JscFooterComponent
  ],
  providers: [
    AuthGuard,
    SnackbarService,
  ]
})
export class GlobalModule { }
