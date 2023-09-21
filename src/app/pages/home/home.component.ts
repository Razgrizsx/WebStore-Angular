import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/interfaces';
import { CartService } from 'src/app/services/cart.service';

const height: {[id:number]: number} = {
  1: 400,
  3: 335,
  4: 350
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private cartService : CartService){}

  cols: number = 3
  category: string = 'All'
  rowHeight = height[this.cols] 

  updateCols(cols : number){
    this.cols = cols
  }

  updateCategory(category:string){
    this.category = category
  }

  addCart(product: Product): void{
    this.cartService.addCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }
}
