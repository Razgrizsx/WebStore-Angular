import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent {

  @Output() colCount = new EventEmitter()
  @Output() sorting = new EventEmitter()

  type :string = 'type'
  itemsCount : number = 10


  onSort(type: string){
    this.type = type
    this.sorting.emit(this.type)
  }

  updateItems(num : number){
    this.itemsCount = num
  }

  updateCols(cols: number){
    this.colCount.emit(cols)
  }
}
