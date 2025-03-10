import { Routes } from '@angular/router';
import { LessonsComponent } from './lessons/lessons.component';
import { Lessons1Component } from './lessons1/lessons1.component';
import { Lessons2Component } from './lessons2/lessons2.component';
import { Lesson3Component } from './lessons3/lesson3.component';
import { Lesson4Component } from './lessons4/lesson4.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { Lessons5Component } from './lessons5/lessons5.component';
import { Lessons8Component } from './lessons8/lessons8.component';
import { Lessons9Component } from './lessons9/lessons9.component';
import { Lessons10Component } from './lessons10/lessons10.component';
import { Lessons6Component } from './lessons6/lessons6.component';
import { Lessons7Component } from './lessons7/lessons7.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default Home Page
    { path: 'home', component: HomeComponent },
    { path: 'lessons', component: LessonsComponent },
    { path: 'les1', component: Lessons1Component },
    { path: 'les2', component: Lessons2Component },
    { path: 'les3', component: Lesson3Component },
    { path: 'les4', component: Lesson4Component },
    { path: 'les5', component: Lessons5Component },
    { path: 'les6', component: Lessons6Component },
    { path: 'les7', component: Lessons7Component },
    { path: 'les8', component: Lessons8Component },
    { path: 'les9', component: Lessons9Component },
    { path: 'les10', component: Lessons10Component },
    { path: 'quiz/:lessonId', component: QuizComponent },
    { path: 'quiz-list', component: QuizListComponent },


];
