import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiGithubService {
  constructor(public http: HttpClient) {
   }

  searchPersonS(name: any){
    const url = 'https://api.github.com/users/'+ name;
    return this.http.get<any>(url);
  }

}
