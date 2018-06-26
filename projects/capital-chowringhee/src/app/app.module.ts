import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { Routing } from './app.router';
import { HomeComponent } from './home/home.component';
import { AngularMaterialModule } from 'angular-material';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { SafePipe } from './pipes/safe.pipe';
import { ServiceCenterComponent } from './service-center/service-center.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    SafePipe,
    ServiceCenterComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule
    ,Routing
    ,HttpClientModule
    ,FormsModule
    ,AngularMaterialModule
    ,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
