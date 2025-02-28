import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // ✅ This is correct
})
export class QuizService {
  constructor(private http: HttpClient) {}

  getQuizData(lessonId: string): Observable<any> {
    const url = `^./../../public/assets/quiz-data/${lessonId}.json`;
    console.log('Fetching quiz data from:', url); // Debugging: Log the URL
    return this.http.get(url).pipe(
      catchError(error => {
        console.error('Error fetching quiz data:', error);
        throw error;
      })
    );
  }
}

