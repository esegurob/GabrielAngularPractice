import {Component} from '@angular/core';
import {OrderRepository} from '../../Model/order.repository';
import {Order} from '../../Model/order.model';


@Component(
  {
    templateUrl: 'orderTable.component.html'
  }
)
export class OrderTableComponent {

  includeShipped: boolean= false;

  constructor(private repository: OrderRepository){

  }

  //get orders
  getOrders(): Order[]{
    return this.repository.getOrders().filter(ord => this.includeShipped || !ord.shipped);
  }

  //mark shipped
  markShipped(order: Order){
    order.shipped = true;
    this.repository.updateOrder(order);
  }

  delete(id: number){
    this.repository.deleteOrder(id);
  }
}
