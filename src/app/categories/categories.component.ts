import { Component, OnInit } from '@angular/core';
import { Category } from '../interface/category';
import { CategoriesService } from '../categories.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService
    .getAllCategories()
    .subscribe((incomingCategories: Category[]) => {
      this.categories = incomingCategories;
    });
  }
}

