import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatMenuModule, MatIconModule, MatDividerModule, MatSnackBarModule, MatBadgeModule, MatListModule, MatInputModule, MatSelectModule, MatTooltipModule, MatDatepickerModule, MatCheckboxModule } from '@angular/material';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { JscFooterComponent } from './components/jsc-footer/jsc-footer.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { SnackbarService } from './services/snackbar.service';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PaymentDialogComponent } from './components/checkout/payment-dialog/payment-dialog.component';
import { OrdersComponent } from './components/orders/orders.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    NavigationComponent,
    JscFooterComponent,
    CartComponent,
    CheckoutComponent,
    PaymentDialogComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatCheckboxModule,
  ],
  exports: [
    LandingPageComponent,
    NavigationComponent,
    JscFooterComponent,
    PaymentDialogComponent
  ],
  providers: [
    AuthGuard,
    SnackbarService,
  ],
  entryComponents: [
    PaymentDialogComponent
  ]
})
export class GlobalModule { }
