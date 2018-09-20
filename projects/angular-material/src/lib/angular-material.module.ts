import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatIconModule, MatPaginatorModule, MatCardModule, MatAutocompleteModule
  , MatFormFieldModule, MatInputModule, MatCheckbox, MatCheckboxModule
  , MatRadioModule, MatSelectModule, MatDatepickerModule, MatSnackBarModule
} from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  imports: [
    CommonModule
    , MatButtonModule
    , MatIconModule
    , MatPaginatorModule
    , MatCardModule
    , MatFormFieldModule
    , MatInputModule
    , MatCheckboxModule
    , MatRadioModule
    , MatSelectModule
    , MatDatepickerModule
    , MatAutocompleteModule
    , MatMomentDateModule
    , OverlayModule
    , MatSnackBarModule
  ],
  declarations: [],
  exports: [
    MatButtonModule
    , MatIconModule
    , MatPaginatorModule
    , MatCardModule
    , MatFormFieldModule
    , MatInputModule
    , MatCheckboxModule
    , MatRadioModule
    , MatSelectModule
    , MatDatepickerModule
    , MatAutocompleteModule
    , MatMomentDateModule
    , OverlayModule
    , MatSnackBarModule
  ]
})
export class AngularMaterialModule { }
