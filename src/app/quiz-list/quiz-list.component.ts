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
    { id: 1, name: "Lesson 1: What is Functional Programming?" },
    { id: 2, name: "Lesson 2: Basic Functional Programming Concepts" },
    { id: 3, name: "Lesson 3: Intermediate Functional Programming Concepts" },
    { id: 4, name: "Lesson 4: Advanced Functional Programming Concepts – Monads, Functors, and Concurrency" },
    { id: 5, name: "Lesson 5: Functional Programming in Practice" },
    { id: 6, name: "Lesson 6: Real-World Applications and Projects - Simplified" },
    { id: 7, name: "Lesson 7: Advanced Topics" },
    { id: 8, name: "Lesson 8: Key Functional Programming Libraries in JavaScript and Python" },
    { id: 9, name: "Lesson 9: Case Studies and Industry Applications" },
    { id: 10, name: "Lesson 10: Final Project" }
  ];

  constructor(private router: Router) {}

  startQuiz(lessonId: number) {
    this.router.navigate(['/quiz', lessonId]);
  }
}
