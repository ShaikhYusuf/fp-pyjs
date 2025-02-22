import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  text = "Introduction To Functional Programming";
  typingSpeed = 100; // 100ms per letter

  ngAfterViewInit() {
    this.startTyping();
  }

  startTyping() {
    let index = 0;
    const typedTextElement = document.getElementById("typed-text") as HTMLElement;
    const startBtn = document.getElementById("start-btn") as HTMLElement;

    const typingInterval = setInterval(() => {
      if (index < this.text.length) {
        typedTextElement.innerHTML += this.text.charAt(index);
        index++;
      } else {
        clearInterval(typingInterval); // Stop typing
        setTimeout(() => {
          startBtn.classList.add("show-button"); // Show button after typing
        }, 1000);
      }
    }, this.typingSpeed);
  }
}
