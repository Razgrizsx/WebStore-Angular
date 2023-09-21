import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() widthCol = false
  product: Product = {
    id: 1,
    title: "Jacket",
    price: 5000,
    category: "Clothing",
    description: "lorem ipsum",
    image: 'http://via.placeholder.com/150'
  }
  @Output() add = new EventEmitter()
  

  addCart(){
    this.add.emit(this.product)
  }
}
