import { Component, OnInit } from '@angular/core';
import { Category } from '../interface/category';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-blabla',
  templateUrl: './blabla.component.html',
  styleUrls: ['./blabla.component.css']
})
export class BlablaComponent implements OnInit {
  categories: Category[] = [];

  // constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    // this.categoriesService
    // .getAllCategories()
    // .subscribe((incomingCategories: Category[]) => {
    //   this.categories = incomingCategories;
    // });
  }
}
