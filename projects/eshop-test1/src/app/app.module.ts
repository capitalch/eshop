import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
// import { GxDynamicFormModule } from 'gx-dynamic-form';
import { AngularMaterialModule } from 'angular-material';
import { IbukiModule } from 'ibuki';
import { GxDynamicFormModule } from './gx-dynamic-form/gx-dynamic-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    , ReactiveFormsModule
    , IbukiModule
    // , HttpClientModule
    , BrowserAnimationsModule
    , GxDynamicFormModule
    , AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
