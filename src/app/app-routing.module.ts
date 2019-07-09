import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './global/components/landing-page/landing-page.component';
import { userRoutes } from './user/user.routes';
import { adminRoutes } from './admin/admin.routes';
import { UserRoles } from './global/models/user';
import { AuthGuard } from './global/services/auth.guard';
import { storeFrontRoutes } from './storefront/storefront.routes';
import { CartComponent } from './global/components/cart/cart.component';
import { CheckoutComponent } from './global/components/checkout/checkout.component';
import { OrdersComponent } from './global/components/orders/orders.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'user', children: userRoutes },
  { path: 'store', children: storeFrontRoutes },
  { path: 'cart', component: CartComponent },
  {
    path: 'admin',
    children: adminRoutes,
    canActivate: [AuthGuard],
    data: {
      allowedRoles: [
        UserRoles.ADMIN
      ]
    }
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
