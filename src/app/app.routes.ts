import { Routes } from '@angular/router';
import { LessonsComponent } from './lessons/lessons.component';
import { Lessons1Component } from './lessons1/lessons1.component';
import { Lessons2Component } from './lessons2/lessons2.component';
import { Lesson3Component } from './lessons3/lesson3.component';
import { Lesson4Component } from './lessons4/lesson4.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'lessons', component: LessonsComponent },
  { path: 'les1', component: Lessons1Component },
  { path: 'les2', component: Lessons2Component },
  { path: 'les3', component: Lesson3Component },
  { path: 'les4', component: Lesson4Component },
  { path: 'quiz', component: QuizComponent },
];
