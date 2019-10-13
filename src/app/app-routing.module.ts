import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from './store/store.module';
import {StoreComponent} from './store/store.component';
import {CartDetailsComponent} from './cart-details/cart-details.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {StorefirstGuard} from './store/storefirst.guard';


const routes: Routes = [];

@NgModule({
  imports: [BrowserModule, StoreModule,
    RouterModule.forRoot([
      {path: "store", component: StoreComponent, canActivate: [StorefirstGuard]},
      {path: "cart", component: CartDetailsComponent, canActivate: [StorefirstGuard]},
      {path: "checkout", component: CheckoutComponent, canActivate: [StorefirstGuard]},
      {path: "admin",
      loadChildren: "./Admin/admin.module#AdminModule", canActivate: [StorefirstGuard]
      },
      {path: "**", redirectTo: "/store"}
      ])],
  providers: [StorefirstGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
