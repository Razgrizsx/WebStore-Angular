import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit{

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService.getCategories().subscribe((categories) => this.categories = categories)
  }

  @Output() filterCategory = new EventEmitter()

  categories : string[] = []

  updateCategory(category: string){
    this.filterCategory.emit(category)
    console.log(category)
  }

}
