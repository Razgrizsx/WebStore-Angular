import { Component } from '@angular/core';

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

  cols: number = 3
  category: string = 'All'
  rowHeight = height[this.cols] 

  updateCols(cols : number){
    this.cols = cols
  }

  updateCategory(category:string){
    this.category = category
  }
}
