import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  repos = "";
  clickedForm = false;
  datosVaciosBol = false;
  datosVacios = "ningun Dato puede ser vacio";
  constructor(private _ApiServiceService: ApiServiceService, private router: Router) {
    this.name = "";
    this.price = NaN;
    this.quantity = NaN;

  }

  ngOnInit(): void {
  }
  saving(): void {
    const productNew = {
      name: this.name,
      price: this.price,
      quantity: this.quantity
    }

    if (this.name == '' || this.price <= 0 || this.quantity <= 0) {
      this.datosVaciosBol = true;
      this.clickedForm = false;
    } else {
      this._ApiServiceService.addProducto(productNew).subscribe(
        response =>{
          console.log(response)
          const { products } = response
          this.products = products;
          this.clickedForm = true;
          this.datosVaciosBol = false;
        })
          setTimeout(() => {
            this.router.navigate(['/productos'])//will redirect to your blog page (an ex: blog.html)
          }, 1000)
        }
      }
    }



