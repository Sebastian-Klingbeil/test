import { QuestionsService } from './../questions.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Result } from '../questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {
  selectedAnswers: { [questionId: number]: string } = {};


  constructor(public questionsService: QuestionsService) {}

  onSelectAnswer(question: Result, selectedAnswer: string): void {
    this.selectedAnswers[question.id] = selectedAnswer;
  }

  isAnswerCorrect(question: Result): boolean {
    return this.selectedAnswers[question.id] === question.correct_answer;
  }
}
