import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.css']
})
export class ListaTarefasComponent {
  lista: string[] = ['Comprar pão', 'Estudar Angular', 'Beber água'];

  excluir(indice: number): void {
    this.lista.splice(indice, 1);
  }
}