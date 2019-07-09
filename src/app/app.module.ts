import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalModule } from './global/global.module';
import { UserModule } from './user/user.module';
import { RouterModule } from '@angular/router';
import { MatDialogModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { StorefrontModule } from './storefront/storefront.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    GlobalModule,
    UserModule,
    MatDialogModule,
    StorefrontModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
