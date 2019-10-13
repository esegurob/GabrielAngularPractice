import {Injectable} from '@angular/core';
import {Cart} from '../app/store/cart.model';

@Injectable()
export class Order {
   public id: number;
   public name: string;
   public address: string;
   public city: string;
  public state: string;
  public zip: string;
  public country: string;
  public shipped: boolean = false;

  constructor(public cart: Cart){

  }

  clear(){
    this.id = null;
    //typescript accepts this way of setting
    this.name = this.address = this.city =  null;
    this.state = null;
    this.zip = null;
    this.country = null;
    this.shipped = false;

    this.cart.clear();
  }
}
