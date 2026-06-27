import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz {
    answers = {
    q1: '',
    q2: '',
    q3: ''
  };

  correct = {
    q1: 'b',
    q2: 'a',
    q3: 'c'
  };

  submitted = false;
  score = 0;

  submit() {
    this.score = 0;
    if (this.answers.q1 === this.correct.q1) this.score++;
    if (this.answers.q2 === this.correct.q2) this.score++;
    if (this.answers.q3 === this.correct.q3) this.score++;
    this.submitted = true;
  }
}
