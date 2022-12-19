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
  addProducto(producto: any): Observable<any> {
    let json = JSON.stringify(producto);
    let params = "json=" + json;
    let httpheaders = new HttpHeaders().set('Content-type', 'application/Json');
    let options = {
      headers: httpheaders
    };
    return this.http.post<any>(this.baseUrl, params, options);
  }
  deleteProduct(producto: any): Observable<any> {
    console.log(producto)
    let httpParams = new HttpParams().set('id', producto);
    httpParams.set('bbb', '222');
    let options = { params: httpParams };
    return this.http.delete<any>(this.baseUrl, options)
  }


}
