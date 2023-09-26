import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() widthCol = false
  @Input() item!: Product
  @Output() add = new EventEmitter()
  

  addCart(){
    console.log(this.item)
    this.add.emit(this.item)
  }
}
