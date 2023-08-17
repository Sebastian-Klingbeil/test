import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questionsUrl?: string;
  questions: Result[] = [];

  constructor(private http : HttpClient) {}

  getAllQuestions(): Observable<QuestionRootObject> {

    return this.http.get<QuestionRootObject>(this.questionsUrl!).pipe(
      map(response => response))
  }

  createQuestion(categoryId: number, difficulty: string) {
    this.questionsUrl = `https://opentdb.com/api.php?amount=5&category=${categoryId}&difficulty=${difficulty}&type=multiple`;
    this.getAllQuestions().subscribe((incomingQuestions: QuestionRootObject) => {
      this.questions = incomingQuestions.results;
    });
  }




}

export interface Result {
	category: string;
	type: string;
	difficulty: string;
	question: string;
	correct_answer: string;
	incorrect_answers: string[];
}

export interface QuestionRootObject {
	response_code: number;
	results: Result[];
}
