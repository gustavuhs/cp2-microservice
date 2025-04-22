import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mes-checker',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ex1.component.html',
  styleUrl: './ex1.component.css'
})
export class MesCheckerComponent {
  numeroMes: number = 0;
}