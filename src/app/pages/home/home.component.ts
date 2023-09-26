import { Component } from '@angular/core';
import { CartItem, Product } from 'src/app/interfaces/interfaces';
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

  constructor(private cartService : CartService,){}

  

  products: Product[] = [{
    id: 1,
    title: "Jacket",
    price: 5000,
    category: "Clothing",
    description: "lorem ipsum",
    image: 'http://via.placeholder.com/150'
  },
    {
      id: 2,
    title: "Socks",
    price: 800,
    category: "Clothing",
    description: "lorem ipsum",
    image: 'http://via.placeholder.com/150'
    },
    {
      id: 3,
      title: "Pc",
      price: 12000,
      category: "Technology",
      description: "lorem ipsum",
      image: 'http://via.placeholder.com/150'
    },
  ]

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
