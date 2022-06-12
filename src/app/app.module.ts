import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import { HomeComponent } from './app-component/home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import { MenuComponent } from './app-component/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
