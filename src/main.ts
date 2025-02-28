import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // Import appConfig
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig) // Use appConfig here
  .catch(err => console.error(err));