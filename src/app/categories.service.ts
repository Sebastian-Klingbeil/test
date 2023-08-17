import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categoryUrl = 'https://opentdb.com/api_category.php';

  constructor(private http: HttpClient) {}

  getAllCategories() {
    return this.http.get<CategoryRootObject>(this.categoryUrl).pipe(
      map(response => response));
  }
}
export interface Trivia_category {
	id: number;
	name: string;
}

export interface CategoryRootObject {
	trivia_categories: Trivia_category[];
}
