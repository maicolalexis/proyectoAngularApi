import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseUrl = environment.baseUrl;
  constructor(public http: HttpClient) {}
    getProducts(){
      return this.http.get<any>(this.baseUrl);
  }
  addProducto(producto: any): Observable<any>{
    let json = JSON.stringify(producto);
    let params = "json="+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.post<any>(this.baseUrl, params, {headers: headers});
}


}
