// filepath: c:\Users\Pc\Downloads\CP2\src\app\app.component.ts
import { Component } from '@angular/core';
import { Ex1Component } from './components/ex1/ex1.component';
import { Ex2Component } from './components/ex2/ex2.component';
import { Ex3Component } from './components/ex3/ex3.component';
import { Ex4Component } from './components/ex4/ex4.component';
import { Ex5Component } from './components/ex5/ex5.component';
import { Ex6Component } from './components/ex6/ex6.component';
import { Ex7Component } from './components/ex7/ex7.component';
import { Ex8Component } from './components/ex8/ex8.component';
import { Ex9Component } from './components/ex9/ex9.component';
import { Ex10Component } from './components/ex10/ex10.component';// Importação do Ex10Component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Ex1Component,
    Ex2Component,
    Ex3Component,
    Ex4Component,
    Ex5Component,
    Ex6Component,
    Ex7Component,
    Ex8Component,
    Ex9Component,
    Ex10Component, // Certifique-se de que o Ex10Component está aqui
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CP2';
}