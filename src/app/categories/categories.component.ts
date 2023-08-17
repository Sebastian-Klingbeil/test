import { QuestionsService } from './../questions.service';
import { Component, OnInit } from '@angular/core';
import { CategoriesService, CategoryRootObject, Trivia_category } from '../categories.service';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Trivia_category[] = [];
  levelsOfDifficulty = ['Easy', 'Medium', 'Hard'];
  selectedDifficulty: string = 'Easy';
  selectedCategoryId?: number;


  constructor(
    private categoriesService: CategoriesService,
    private questionsService: QuestionsService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.categoriesService.getAllCategories().subscribe((incomingCategories: CategoryRootObject) => {
          this.categories = incomingCategories.trivia_categories;
      });
    } catch(error) {
      console.log('Error fetching categories', error);
    }
  }

  onCreate(): void {
    if (this.selectedCategoryId && this.selectedDifficulty) {
      const lowerCaseDifficulty = this.selectedDifficulty.toLowerCase();
      this.questionsService.createQuestion(this.selectedCategoryId, lowerCaseDifficulty);
    }
  }
}

