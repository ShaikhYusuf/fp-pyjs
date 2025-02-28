import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-quiz-list',
  imports: [CommonModule],
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.css'
})
export class QuizListComponent {
  lessons = [
    { id: 1, name: "Lesson 1: Introduction" },
    { id: 2, name: "Lesson 2: Higher Order Functions" },
    { id: 3, name: "Lesson 3: Pure Functions" }
  ];

  constructor(private router: Router) {}

  startQuiz(lessonId: number) {
    this.router.navigate(['/quiz', lessonId]);
  }
}
