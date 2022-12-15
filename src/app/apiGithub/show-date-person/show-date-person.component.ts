import { Component, Input, OnInit } from '@angular/core';
import { ApiGithubService } from 'src/app/services/api-github.service';

@Component({
  selector: 'app-show-date-person',
  templateUrl: './show-date-person.component.html',
  styleUrls: ['./show-date-person.component.css']
})
export class ShowDatePersonComponent implements OnInit {
  @Input() persondate: any[] = [];
  constructor(private _apiGithubService: ApiGithubService ) {

  }

  ngOnInit(): void {
  }

}
