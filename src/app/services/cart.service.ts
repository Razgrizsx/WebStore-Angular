import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../interfaces/interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({items: []})

  constructor(private _snackBar : MatSnackBar) { }

  addCart(item: CartItem): void {
    const items = [...this.cart.value.items]

    const itemCart = items.find((_item) => _item.id === item.id)

    if(itemCart){
      itemCart.quantity += 1 
    }else{
      items.push(item)
    }

    this.cart.next({items})
    this._snackBar.open("Item added to cart", 'Ok', {duration: 3000})
    console.log(this.cart.value)
  }
}
