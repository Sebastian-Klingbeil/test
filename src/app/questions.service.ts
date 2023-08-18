import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questionsUrl?: string;
  questions: Result[] = [];
  allAnswers: Result[] = [];

  constructor(private http : HttpClient) {}

  getAllQuestions(): Observable<QuestionRootObject> {
    return this.http.get<QuestionRootObject>(this.questionsUrl!).pipe(
      map(response => {
        return response}))
  }

  createQuestion(categoryId: number, difficulty: string) {
    this.questionsUrl = `https://opentdb.com/api.php?amount=5&category=${categoryId}&difficulty=${difficulty}&type=multiple`;
    this.getAllQuestions().subscribe((incomingQuestions: QuestionRootObject) => {
      this.questions = incomingQuestions.results;

      this.questions.forEach(question => {
        question.allAnswers = [...question.incorrect_answers, question.correct_answer];
        this.shuffleArray(question.allAnswers);
      })
    });
  }

  private shuffleArray(array: string[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

}

export interface Result {
  id: number;
	category: string;
	type: string;
	difficulty: string;
	question: string;
	correct_answer: string;
	incorrect_answers: string[];
  allAnswers: string[];
}

export interface QuestionRootObject {
	response_code: number;
	results: Result[];
}
