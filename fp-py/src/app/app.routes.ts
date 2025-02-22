import { Routes } from '@angular/router';
import { LessonsComponent } from './lessons/lessons.component';
import { Lessons1Component } from './lessons1/lessons1.component';

export const routes: Routes = [
    {path: 'lessons', component: LessonsComponent},
    {path: 'les1', component: Lessons1Component},
];
