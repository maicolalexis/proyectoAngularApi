import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  name: string;
  price: number;
  quantity: number;
  products: Product[] = [];
  constructor(private _ApiServiceService: ApiServiceService) {
    this.name = "";
    this.price = 0;
    this.quantity = 0;
   }

  ngOnInit(): void {
  }
  saving():void{
    const productNew = {
      name: this.name,
      price: this.price,
      quantity: this.quantity
    }
    this._ApiServiceService.addProducto(productNew).subscribe(response =>{
      console.log(response);
    })
  }
}
