import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  ngOnInit(): void {
    this.data = this.cart.items
  }

  cart: Cart = { items: [{
    product: 'https://via.placeholder.com/150',
    name: 'Jacket',
    price: 5000,
    quantity: 5,
    id: 1
  },
  {
    product: 'https://via.placeholder.com/150',
    name: 'Pants',
    price: 4000,
    quantity: 3,
    id: 2
  }
] }

  data : CartItem[] = []

  displayCol : string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]

  getTotal(items: CartItem[]){
    return this.data.map( (item) => item.price * item.quantity ).reduce((prev, current) => prev + current, 0)
  }

  clear(){
    this.data = []
  }
}
