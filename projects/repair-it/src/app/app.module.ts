import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SelectionComponent } from './selection/selection.component';
import { FormsModule } from '@angular/forms';
import { Routing } from './app.router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { RepairComponent } from './repair/repair.component';
import { SafePipe } from './pipes/safe.pipe';
import { AngularMaterialModule } from 'angular-material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectionComponent,
    HomeComponent,
    GalleryComponent,
    ContactComponent,
    RepairComponent,
    SafePipe
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
