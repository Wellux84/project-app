import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
  standalone: true
})
export class Calculator {
  a = 0;
  b = 0;
  result = 0;

  add() { this.result = this.a + this.b; }
  sub() { this.result = this.a - this.b; }
  mul() { this.result = this.a * this.b; }
  div() { this.result = this.a / this.b; }
}
