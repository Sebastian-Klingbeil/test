import { Component, OnInit } from '@angular/core';
import { CategoriesService, RootObject, Trivia_category } from '../categories.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Trivia_category[] = [];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService
    .getAllCategories()
    .subscribe((incomingCategories: RootObject) => {
      this.categories = incomingCategories.trivia_categories;
    });
  }
}

