import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../interfaces/interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({items: []})

  constructor(private _snackBar : MatSnackBar, private http: HttpClient) { }

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
  }

  getTotal(items: Array<CartItem>): number{
    return items.map( (item) => item.price * item.quantity ).reduce((prev, current) => prev + current, 0)
  }

  clearCart(){
    this.cart.next({items : []})
    this._snackBar.open('Cart is Cleared', "Ok", {duration: 3000})
  }

  deleteItem(id: number): void{
    const items = [...this.cart.value.items]
    const itemCart = items.filter((item) => item.id !== id) 
     return this.cart.next({items: itemCart})
  }
  reduceItem(id: number): void{
    const items = [...this.cart.value.items]
    const itemCart = items.find(e => e.id === id)
    
    if(itemCart){
      if(itemCart.quantity === 1){
        this.deleteItem(itemCart.id)
      }else{itemCart.quantity -= 1}
      }
  }
}
