import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem, Product } from 'src/app/interfaces/interfaces';
import { ApiService } from 'src/app/services/api.service';
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
export class HomeComponent implements OnInit, OnDestroy{

  constructor(private cartService : CartService, private apiService : ApiService){}

  ngOnInit(): void {
   this.subscription = this.apiService.getProducts().subscribe((prod) => {this.products = prod, this.filtered = prod})
   console.log(this.products)
  }

  subscription! : Subscription

  products: Product[] = []

  cols: number = 3
  category: string = 'All'
  rowHeight = height[this.cols] 
  filtered: Product[] = this.products

  updateCols(cols : number){
    this.cols = cols
  }

  sorting(event: string): void{
    if(event === "asc"){
      this.filtered.sort((a, b) => a.price > b.price ? 1 : -1)
    }else{
      this.filtered.sort((a, b) => a.price > b.price ? -1 : 1)
    }
    
  }

  updateCategory(category:string){
    this.category = category
    if(this.category === "All"){this.filtered = this.products}
    else
    {this.filtered = this.products.filter(item => item.category === category)}
    console.log(this.filtered)
}
    

  itemCount(event: number){
      this.filtered = this.products.slice(0, event)
      console.log(this.filtered)
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

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe()
    }
    
  }
}
