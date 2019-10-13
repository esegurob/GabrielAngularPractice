
import {NgModule} from '@angular/core';
import {ProductRepository} from './product.repository';
import {StaticDatasource} from './static.datasource';
import {Cart} from '../app/store/cart.model';
import {Order} from './order.model';
import {OrderRepository} from './order.repository';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RestDatasource} from './rest.datasource';
import {AuthService} from './auth.service';


@NgModule({

  imports: [
    FormsModule,
    HttpClientModule
  ],
  providers:[ ProductRepository, StaticDatasource, Cart,
              Order, OrderRepository, {
    provide: StaticDatasource, useClass : RestDatasource},
    RestDatasource, AuthService
  ]
})

export class ModelModule{}
