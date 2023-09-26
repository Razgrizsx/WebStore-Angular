import { Component, Input } from '@angular/core';
import { Cart, CartItem } from 'src/app/interfaces/interfaces';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private _cart : Cart = {items: []}
  itemsQuantity : number = 0

  @Input()
  get cart() : Cart {
    return this._cart
  }

  set cart(cart : Cart){
    this._cart = cart
    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, curr) => prev + curr, 0)
  }

  constructor(private cartService : CartService){}


  getTotal(items : Array<CartItem>): number {
    return this.cartService.getTotal(items)
  }

  clearCart(){
    this.cartService.clearCart()
  }

}
