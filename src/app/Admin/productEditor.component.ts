import {Component} from '@angular/core';
import {ProductRepository} from '../../Model/product.repository';
import {Product} from '../../Model/product.model';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component(
  {
    templateUrl: 'productEditor.component.html'
  }
)
export class ProductEditorComponent {

  editing : boolean = false;
  product : Product = new Product();

  constructor(private repository: ProductRepository, private router : Router, activateRoute : ActivatedRoute){
    this.editing = activateRoute.snapshot.params["mode"] == "edit";
    if (this.editing){
      Object.assign(this.product, repository.getProduct(activateRoute.snapshot.params["id"]))
    }
  }

  save(from: NgForm){
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl("/admin/main/products");
  }
}
