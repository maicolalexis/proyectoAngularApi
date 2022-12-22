import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseUrl = environment.baseUrl;
  constructor(public http: HttpClient) { }
  getProducts() {
    return this.http.get<any>(this.baseUrl);
  }
  getOneProduct(id: number){

    let httpParams = new HttpParams().set('id', id);
    httpParams.set('bbb', '222');
    let options = { params: httpParams };
    return this.http.get<any>(this.baseUrl, options);
  }
  addProducto(producto: any): Observable<any> {
    let json = JSON.stringify(producto);
    let params = "json=" + json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.post<any>(this.baseUrl, params, {headers: headers});
  }
  deleteProduct(producto: any): Observable<any> {
    console.log(producto)
    let httpParams = new HttpParams().set('id', producto);
    httpParams.set('bbb', '222');
    let options = { params: httpParams };
    return this.http.delete<any>(this.baseUrl, options)
  }
  putProduct(data: any): Observable<any>{
    const body = new URLSearchParams();
    body.set('name', data.name);
    body.set('price', data.price);
    body.set('quantity', data.quantity);
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    };
    return this.http.put<any>(this.baseUrl,body.toString(), options);
  }


}
