import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormFieldValidationErrorsPipe } from './pipes/form-validation-error.pipe';
import { CambiarTamanoTituloDirective } from './directives/titulos.directives';

@NgModule({
  declarations: [
      FormFieldValidationErrorsPipe,
      CambiarTamanoTituloDirective,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatListModule,
    FormFieldValidationErrorsPipe,
    CambiarTamanoTituloDirective,
  ]
})
export class SharedModule { }
