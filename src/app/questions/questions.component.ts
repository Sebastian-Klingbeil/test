import { QuestionsService } from './../questions.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Result } from '../questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {
  questions: Result[] = [];

  constructor(public questionsService: QuestionsService) {}
}
