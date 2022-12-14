import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './products/crud/create/create.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
{path: 'productos', component: ProductsComponent},
{path: 'productos/create', component: CreateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
