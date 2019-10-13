import { Component, OnInit } from '@angular/core';
import {Cart} from '../store/cart.model';
import {Router} from '@angular/router';



@Component({
  // selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  // styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  constructor(public cart : Cart, private router : Router) { }

  ngOnInit() {
  }

  continueShoppig(){
    this.router.navigateByUrl("/store");
  }
}
