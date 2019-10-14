import { Component, OnInit } from '@angular/core';
import {PersonServicesService} from '../person-services.service';

@Component({
  selector: 'app-persondetails',
  templateUrl: './persondetails.component.html',
  styleUrls: ['./persondetails.component.css']
})
export class PersondetailsComponent implements OnInit {

  constructor(private _personservice : PersonServicesService) { }

  ngOnInit() {
    this._personservice.getData().subscribe(data => this.persons = data);
  }
  persons = [];
}
// //code is not flexible
// // not real, we are always having the same engine and tire
// export class Engine{
//   // constructor(p1, p2, p3, p5){}
// }
//
// export class Tires {
//   // constructor(p1, p2, p3){}
// }
//
// //without dependency injection DI
// export class Car {
//   enginex;
//   tireabc;
//   constructor(){
//     this.enginex = new Engine();
//     this.tireabc = new Tires();
//   }
// }
//
// //lets use design pattern with DI
// export class Car2 {
//   enginex;
//   tireabc;
//
//   constructor(engine, tire){
//     this.enginex = engine;
//     this.tireabc = tire;
//   }
// }
//
// //so class does not create ... it just consume ...
// var x = new Engine();
// var y = new Tires();
//
// var mycar = new Car2(x,y);
