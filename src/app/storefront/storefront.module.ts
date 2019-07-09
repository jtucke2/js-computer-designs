import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompareComponent } from './compare/compare.component';
import { CustomizeComponent } from './customize/customize.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatSelectModule, MatButtonModule, MatCardModule, MatListModule, MatStepperModule, MatRadioModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CompareComponent,
    CustomizeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatStepperModule,
    MatRadioModule,
  ],
  exports: [
    CompareComponent,
    CustomizeComponent,
  ]
})
export class StorefrontModule { }
