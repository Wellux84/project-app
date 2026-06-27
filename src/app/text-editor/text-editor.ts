import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-editor',
  imports: [CommonModule, FormsModule],
  templateUrl: './text-editor.html',
  styleUrl: './text-editor.css',
  standalone: true
})
export class TextEditor {
    text = '';

  toUpper() {
    this.text = this.text.toUpperCase();
  }

  reverse() {
    this.text = this.text.split('').reverse().join('');
  }
}
