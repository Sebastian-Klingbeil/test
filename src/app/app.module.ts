import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlablaComponent } from './blabla/blabla.component';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [
    AppComponent,
    BlablaComponent,
    CategoriesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
