import { Component, OnInit } from '@angular/core';

import { Product } from '../model/product'
import { ApiServiceService } from '../services/api-service.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  productId = [];
  identificador: Number;
  constructor(private _apiService: ApiServiceService) {
    this.identificador = 0;
  }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this._apiService.getProducts().subscribe(response => {
      console.log(response);
      const { products } = response
      this.products = products;
    }
    )
  }
  deleteProduct(id: number){
    this._apiService.deleteProduct(id).subscribe(response => {
console.log(response);
    });

  }
}
