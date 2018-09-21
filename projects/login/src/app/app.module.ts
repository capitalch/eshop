import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from 'angular-material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IbukiModule } from 'ibuki';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    IbukiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
