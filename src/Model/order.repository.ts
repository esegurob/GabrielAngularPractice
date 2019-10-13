import {Injectable} from '@angular/core';
import {Order} from './order.model';
import {StaticDatasource} from './static.datasource';
import {Observable} from 'rxjs';
import {RestDatasource} from './rest.datasource';


@Injectable()
export class OrderRepository{
  private orders : Order[] = [];
  private loaded: boolean = false;

  constructor(private  dataSource : RestDatasource){

  }

  loadOrders(){
    this.loaded = true;
    this.dataSource.getOrder().subscribe(orders => this.orders=orders);
  }

  getOrders() : Order[]{
    if (!this.loaded){
      return this.orders;
    }
  }

  saveOrder(order : Order)  : Observable<Order>{
    return this.dataSource.saveOrder(order);
  }

  updateOrder(order : Order){
    this.dataSource.updateOrder(order).subscribe(order=>{
      this.orders.splice(this.orders.findIndex(ord=>ord.id==order.id),1,order);
    });
  }

  deleteOrder(id: number){
    this.dataSource.deleteOrder(id).subscribe(order=>{
      this.orders.splice(this.orders.findIndex(ord=> ord.id==order.id));
    })
  }
}
