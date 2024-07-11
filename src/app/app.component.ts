import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'northwind';
  user:string='Cagri Camyar';
  product1 = {productId:1, productName: 'Bardak', categoryId:1, unitPrice:15}
  product2 = {productId:2, productName: 'Laptop', categoryId:1, unitPrice:15}
  product3 = {productId:3, productName: 'Mouse', categoryId:1, unitPrice:15}
  product4 = {productId:4, productName: 'Keyboard', categoryId:1, unitPrice:15}
  product5 = {productId:5, productName: 'Camera', categoryId:1, unitPrice:15}

  products = [this.product1, this.product2, this.product3, this.product4, this.product5]


}
