import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './apiGithub/navbar/navbar.component';
import { SearchPersonComponent } from './apiGithub/search-person/search-person.component';
import { ShowDatePersonComponent } from './apiGithub/show-date-person/show-date-person.component';
import { ComponentParentComponent } from './apiGithub/component-parent/component-parent.component'
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './products/crud/create/create.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    SearchPersonComponent,
    ShowDatePersonComponent,
    ComponentParentComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
