import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './global/components/landing-page/landing-page.component';
import { userRoutes } from './user/user.routes';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'user', children: userRoutes },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
