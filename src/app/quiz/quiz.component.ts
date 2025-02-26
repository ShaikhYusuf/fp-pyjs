import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [FormsModule, CommonModule,],  // Ensure HttpClientModule is included in imports
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  questions: any[] = [];  // Store quiz questions
  userAnswers: string[] = [];
  score = 0;

  constructor(private http: HttpClient) {
    this.loadQuizData();  // Calling the method to load quiz data
  }

  // Fetch the quiz data from the JSON file in public/quiz-data
  loadQuizData() {
    this.http.get<any[]>('public/quiz-data/lesson1.json').subscribe({
      next: (data) => {
        this.questions = data;
      },
      error: (err) => {
        console.error('Error loading quiz data:', err);
        alert('There was an error loading the quiz data. Please try again later.');
      }
    });
  }

  // Function to handle answer selection
  selectAnswer(questionIndex: number, answer: string) {
    this.userAnswers[questionIndex] = answer;
  }

  // Function to calculate the score
  calculateScore(): void {
    this.score = this.questions.reduce((acc, curr, index) => {
      if (this.userAnswers[index] === curr.correctAnswer) {
        acc++;
      }
      return acc;
    }, 0);
  }

  // Reset the quiz
  resetQuiz() {
    this.userAnswers = [];
    this.score = 0;
  }
}
