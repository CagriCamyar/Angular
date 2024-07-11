import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductResponceModel } from '../../models/productResponseModel';
 
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
 

  products:Product[] = []; 
}
