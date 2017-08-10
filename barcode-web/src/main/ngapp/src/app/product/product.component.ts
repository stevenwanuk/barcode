import { Component, OnInit } from '@angular/core';
import { ProductService } from './../service/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  providers: [ProductService],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Array<Product> = [];

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.load();
  }

  load() {

    this._productService.getProducts().subscribe(data => this.products = data,
      error => alert(error));
  }

  delete(product: Product) {
    console.log('delete product :' + product.id);
    this._productService.delete(product.id).subscribe(data => {
      const index = this.products.indexOf(product);
      this.products.splice(index, 1);
    });


  }

}
