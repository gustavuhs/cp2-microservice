import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mini-calculadora',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ex10.component.html',
  styleUrls: ['./ex10.component.css']
})
export class MiniCalculadoraComponent {
  numeroA: number = 0;
  numeroB: number = 0;
  tipoOperacao: string = '';
}