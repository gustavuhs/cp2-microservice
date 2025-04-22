import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interpretador',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ex7.component.html',
  styleUrls: ['./ex7.component.css']
})
export class InterpretadorComponent {
  entradaTexto: string = '';
}