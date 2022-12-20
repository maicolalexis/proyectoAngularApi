import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './products/crud/create/create.component';
import { UpdateComponent } from './products/crud/update/update.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
{path: 'productos', component: ProductsComponent},
{path: 'productos/create', component: CreateComponent},
{path: 'productos/edit/:id', component: UpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
