import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {

  @Output() filterCategory = new EventEmitter()

  categories : string[] = ['All','Clothing', 'Technology']

  updateCategory(category: string){
    this.filterCategory.emit(category)
    console.log(category)
  }

}
