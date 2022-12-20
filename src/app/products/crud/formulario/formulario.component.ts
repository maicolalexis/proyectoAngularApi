import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  id: number;

  name: string;
  price: number;
  quantity: number;
  products: Product[] = [];
  repos = "";
  clickedForm = false;
  datosVaciosBol = false;
  datosVacios = "ningun Dato puede ser vacio";

  constructor(private _ApiServiceService: ApiServiceService, private router: Router, private route: ActivatedRoute) {
    this.name = "";
    this.price = NaN;
    this.quantity = NaN;
    this.id = 0

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
  }
  submit(): void {
    console.log(this.router.url);
    const productNew = {
      name: this.name,
      price: this.price,
      quantity: this.quantity
    }

    if (this.name == '' || this.price <= 0 || this.quantity <= 0) {
      this.datosVaciosBol = true;
      this.clickedForm = false;
    } else {
      if(this.router.url == '/productos/create'){
      this._ApiServiceService.addProducto(productNew).subscribe(
        response =>{
          console.log(response)
          const { products } = response
          this.products = products;
          this.clickedForm = true;
          this.datosVaciosBol = false;
        })
      }else if(this.router.url == '/productos/edit'){
        this._ApiServiceService.putProduct(productNew, this.id).subscribe(
          response =>{
            console.log(response)
            this.clickedForm = true;
            this.datosVaciosBol = false;
          })
      }
      this.products = [];
          setTimeout(() => {
            this.router.navigate(['/productos'])//will redirect to your blog page (an ex: blog.html)
          }, 1000)
        }
      }

}
