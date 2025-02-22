import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lessons',
  imports: [MatCardModule,CommonModule,RouterModule],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.css'
})
export class LessonsComponent {
  lessons = [
    { title: 'Lesson 1: Introduction to Economics', description: 'Basic concepts of supply and demand.', url:'/les' },
    { title: 'Lesson 2: Market Structures', description: 'Understanding monopoly, oligopoly, and perfect competition.' },
    { title: 'Lesson 3: Economic Policies', description: 'How governments control economic growth and inflation.' }
  ];
}
