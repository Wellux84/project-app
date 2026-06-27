import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Calculator } from './calculator/calculator';
import { TextEditor } from './text-editor/text-editor';
import { Quiz } from './quiz/quiz';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'calculator', component: Calculator },
  { path: 'editor', component: TextEditor },
  { path: 'quiz', component: Quiz }
];
