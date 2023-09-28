import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Product } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  
  getProducts(){
    return this.http.get<Array<Product>>(`${environment.apiUrl}`)
  }

  getCategories(){
    return this.http.get<Array<string>>(`${environment.apiUrl}/categories`)
  }

}
