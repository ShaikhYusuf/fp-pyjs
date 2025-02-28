import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [FormsModule, CommonModule, ],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  lessonId: string = '';
  quizData: any = { questions: [] }; // Initialize with an empty questions array
  currentQuestionIndex: number = 0;
  selectedOption: string = '';

  constructor(private route: ActivatedRoute, private quizService: QuizService) {}

  ngOnInit() {
    this.lessonId = this.route.snapshot.paramMap.get('id') || '';
    console.log('Lesson ID:', this.lessonId); // Debugging: Log the lessonId

    if (!this.lessonId) {
      console.error('Lesson ID is missing');
      return;
    }

    this.quizService.getQuizData(this.lessonId).subscribe({
      next: (data) => {
        this.quizData = data;
        console.log('Quiz data loaded:', data); // Debugging: Log the loaded data
      },
      error: (err) => {
        console.error('Failed to load quiz data:', err);
      }
    });
  }

  nextQuestion() {
    if (this.quizData.questions && this.quizData.questions.length > 0) {
      const correctAnswerIndex = this.quizData.questions[this.currentQuestionIndex].answer;
      const selectedOptionIndex = this.quizData.questions[this.currentQuestionIndex].options.indexOf(this.selectedOption);

      if (selectedOptionIndex === correctAnswerIndex) {
        alert('Correct!');
      } else {
        alert('Wrong Answer!');
      }

      this.selectedOption = ''; // Reset the selected option

      // Move to the next question or end the quiz
      if (this.currentQuestionIndex < this.quizData.questions.length - 1) {
        this.currentQuestionIndex++;
      } else {
        alert('Quiz completed!');
        // Optionally, reset the quiz or navigate to a different page
      }
    }
  }
}
