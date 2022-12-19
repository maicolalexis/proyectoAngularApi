import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
  productDelete = false;
  Swal: any;
  constructor(private _apiService: ApiServiceService, private router: Router) {
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
  deleteProduct(identificador: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to continue',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._apiService.deleteProduct(identificador).subscribe(response => {
          console.log(response);
          const { products } = response
          this.productDelete = products;
          console.log(this.productDelete)
        if(this.productDelete === true){
        Swal.fire(
          'Deleted!',
          'Your product was delete',
          'success'
        )
        setTimeout(() => {
          location.reload();//will redirect to your blog page (an ex: blog.html)
        }, 500);
        }else{
          Swal.fire(
            'Error!',
            'your product not was delete',
            'error'
          )
        }
      });
      }
    })



  }
}
