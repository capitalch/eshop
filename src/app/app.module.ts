import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
// import { AppService } from './service/app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    , RouterModule.forRoot(routes, { useHash: true })
    , HttpClientModule
    , BrowserAnimationsModule
    , OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
