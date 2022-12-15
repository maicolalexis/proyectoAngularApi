import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product'
import { ApiServiceService } from '../services/api-service.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private _apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts():void{
    this._apiService.getProducts().subscribe(response =>{
      const { products } = response
      this.products = products;
    })
  }

}
