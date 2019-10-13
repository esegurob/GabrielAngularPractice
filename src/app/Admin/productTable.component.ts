import {Component} from '@angular/core';
import {ProductRepository} from '../../Model/product.repository';
import {Product} from '../../Model/product.model';


@Component(
  {
    templateUrl: 'productTable.component.html'
  }
)
export class ProductTableComponent {

  constructor(private repository: ProductRepository){

  }

  getProducts(): Product[]{
    return this.repository.getProducts();
  }

  deleteProduct(id: number){
    return this.repository.deleteProduct(id);
  }
}
