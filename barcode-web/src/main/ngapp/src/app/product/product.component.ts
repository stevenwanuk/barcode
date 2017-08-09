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
  }

  load() {

    this._productService.getProducts().subscribe(data => this.products = data,
      error => alert(error));
  }

}
