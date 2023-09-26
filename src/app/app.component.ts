import { Component, OnInit } from '@angular/core';
import { Cart } from './interfaces/interfaces';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private cartService : CartService){}

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => this.cart = _cart)
  }

  title = 'WebStore';

  cart: Cart = {items: []}
}
