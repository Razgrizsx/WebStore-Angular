import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { Cart, CartItem } from 'src/app/interfaces/interfaces';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  constructor(private cartService : CartService, private http: HttpClient){}

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

  checkout(){
    this.http.post(environment.stripeUrl, {
      items: this.cart.items
    }).subscribe(async(res: any) => {
      let stripe = await loadStripe(environment.stripeKey);
      stripe?.redirectToCheckout({
        sessionId: res.id,
      });
    })
  }
}
