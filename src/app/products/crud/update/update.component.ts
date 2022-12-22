import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: number;
  name: string;
  price: number;
  quantity: number;
  constructor(private _ApiServiceService: ApiServiceService, private route: ActivatedRoute) {
    this.id = 0;
    this.name = "";
    this.price = 0;
    this.quantity = 0;
   }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this._ApiServiceService.getOneProduct(this.id).subscribe(data =>
    {var datos = data['products']
    datos = datos[0];
    this.name = datos['name'];
    this.price = datos['price']
    this.quantity =  datos['quantity']
  });

  }

}
