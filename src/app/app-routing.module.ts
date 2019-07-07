import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './global/components/landing-page/landing-page.component';
import { userRoutes } from './user/user.routes';
import { adminRoutes } from './admin/admin.routes';
import { UserRoles } from './global/models/user';
import { AuthGuard } from './global/services/auth.guard';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'user', children: userRoutes },
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
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
