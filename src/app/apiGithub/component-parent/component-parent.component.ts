import { Component, Input, OnInit } from '@angular/core';
import { ApiGithubService } from 'src/app/services/api-github.service';

@Component({
  selector: 'app-component-parent',
  templateUrl: './component-parent.component.html',
  styleUrls: ['./component-parent.component.css']
})
export class ComponentParentComponent implements OnInit {
  loading = true;
  listPerson: any[] = [];
  cargado = false;

  constructor(private _apiGithubService: ApiGithubService) {
  }

  ngOnInit(): void {
  }
  searchPerson(person: any){
    this.cargado = false;
    this.loading = true;
    this.listPerson = [];
    this._apiGithubService.searchPersonS(person).subscribe(data=>{
      this.loading = false;
      //
      console.log(Object.keys(data));
      this.listPerson = Object.values(data);
      console.log(this.listPerson);
      this.cargado = true;
    }, error => {
      console.log(error);
      this.cargado = false;
      this.loading = false;
    })
  }


}
