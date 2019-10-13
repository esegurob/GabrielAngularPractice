import {NgModule} from '@angular/core';
import {AppComponent} from '../app.component';
import {StoreComponent} from './store.component';
import {BrowserModule} from '@angular/platform-browser';
import {ModelModule} from '../../Model/model.module';
import {FormsModule} from '@angular/forms';
import {CartSummaryComponent} from '../cart-summary/cart-summary.component';
import {CartDetailsComponent} from '../cart-details/cart-details.component';
import {CheckoutComponent} from '../checkout/checkout.component';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    StoreComponent,
    CartSummaryComponent,
    CartDetailsComponent,
    CheckoutComponent
  ],
  exports: [
    StoreComponent, CartSummaryComponent,
    CartDetailsComponent, CheckoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class StoreModule {

}
