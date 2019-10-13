import { Component, OnInit } from '@angular/core';
import {ProductRepository} from '../../Model/product.repository';
import {Product} from '../../Model/product.model';
import {Cart} from './cart.model';
import {Router} from '@angular/router';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(private repository : ProductRepository, private cart : Cart,
              private router: Router) { }

  ngOnInit() {
  }

  //list products
  get products() : Product[]{
    let pageIndex = (this.selectedPage-1) * this.productsPerPage;
    return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage)
  }

  //list categories
  get categories() : string[]{
    return this.repository.getCategories();
  }

  //change of product by category
  changeCategory( newCategory? : string){
    this.selectedCategory = newCategory;
  }

  changePage(newpage : number){
    this.selectedPage = newpage;
  }

  changePageSize(newSize : number){
    this.productsPerPage = Number(newSize);
    this.changeCategory();
  }

  get pageNumbers(): number[]{
    return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length/this.productsPerPage))
          .fill(0).map((x,i)=>i+1);
  }

  // addProductToCart(product : Product){
  //   this.cart.addLine(product);
  // }

  addProductToCart(product : Product){
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart");
  }

}
