import {Injectable} from '@angular/core';
import {Product} from '../../Model/product.model';


@Injectable()
export class Cart {
  public Lines: CartLine[] = [];
  public itemCount: number = 0;
  public cartPrice: number = 0;

  //METHODS
  //Method to add a line each time you add a cart
  addLine(product: Product, quantity: number = 1) {
    let line = this.Lines.find(line => line.product.id == product.id);
    if (line != undefined) {
      line.quantity += quantity;
    } else {
      this.Lines.push(new CartLine(product, quantity));
    }
    //call of recalculate method
    this.recalculate();
  }

  updateQuantity(product : Product, quantity : number){
    let line = this.Lines.find(line=> line.product.id == product.id);
    if(line != undefined){
      line.quantity = Number(quantity);
    }
    //call of recalculate method
    this.recalculate();
  }

  removeLine(id : number){
    let index = this.Lines.findIndex(line => line.product.id == id);
    this.Lines.splice(index,1);
    //call of recalculate method
    this.recalculate();
  }

  clear(){
    this.Lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }

  //recalculate as you add or remove items from the cart
  private recalculate(){
    this.itemCount = 0;
    this.cartPrice = 0;

    this.Lines.forEach(l=>{
      this.itemCount += l.quantity;
      this.cartPrice += (l.quantity * l.product.price);
    })
  }
}

export class CartLine {

  constructor(public product: Product, public quantity: number) {
  }

  lineTotal() {
    return this.quantity * this.product.price;
  }
}

