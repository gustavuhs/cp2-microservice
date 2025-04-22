import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-itens-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class ItensListaComponent {
  listaCoisas: string[] = ["Café", "Pão", "Queijo"];
}