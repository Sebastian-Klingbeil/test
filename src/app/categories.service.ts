import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './interface/category';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categoryUrl = 'https://opentdb.com/api_category.php';

  constructor(private http: HttpClient) {}

  getAllCategories() {
    return this.http.get<Category[]>(this.categoryUrl).pipe(
      map((response) => response));
  }
}
