import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-verifica-idade',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.css']
})
export class VerificaIdadeComponent {
  valorIdade: number = 0;
}