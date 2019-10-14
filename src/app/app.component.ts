import {Component, OnInit} from '@angular/core';
import {PersonServicesService} from './person-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Third Project';

  persons = [];

  constructor(private _personservice : PersonServicesService){

  }

  ngOnInit() {
    this._personservice.getData().subscribe(data => this.persons = data);
  }
}
