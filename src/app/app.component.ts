import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatCardModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fp-py';

  constructor(private router: Router) { }

  login() {
    // Logic for login
    // After successful login, redirect to home page
    this.router.navigate(['/']);
  }
}

