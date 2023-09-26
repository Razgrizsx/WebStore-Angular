import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/interfaces/interfaces';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  constructor(private cartService : CartService){}

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => this.cart = _cart)
    this.data = this.cart.items
  }

  cart: Cart = { items: [] }

  data : CartItem[] = []

  displayCol : string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]

  getTotal(items: Array<CartItem>): number{
    return this.cartService.getTotal(items) 
  }

  clear(){
    this.cartService.clearCart()
  }

  delete(id: number){
    this.cartService.deleteItem(id)
    this.data = this.cart.items
  }

  remove(id: number){
    
    this.cartService.reduceItem(id)
    this.data = this.cart.items
  }

  add(item: CartItem){
    
    this.cartService.addCart(item)
    this.data = this.cart.items
  }
}
