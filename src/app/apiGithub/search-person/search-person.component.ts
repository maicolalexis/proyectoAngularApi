import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiGithubService } from 'src/app/services/api-github.service';

@Component({
  selector: 'app-search-person',
  templateUrl: './search-person.component.html',
  styleUrls: ['./search-person.component.css']
})
export class SearchPersonComponent implements OnInit {
  search: string;

  @Output() parametrosSeleccionados = new EventEmitter<string>()
  constructor(private _apiGithubService: ApiGithubService) {
    this.search = "";
   }

  ngOnInit(): void {
  }
  searchPerson(){
    this.parametrosSeleccionados.emit(this.search);
  }

}
