import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pessoas-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex6.component.html',
  styleUrls: ['./ex6.component.css']
})
export class PessoasListaComponent {
  listaPessoas = [
    { nome: 'Carlos', idade: 28 },
    { nome: 'Fernanda', idade: 34 },
    { nome: 'Luana', idade: 19 }
  ];

  rastrearPorNome(index: number, pessoa: any): string {
    return pessoa.nome;
  }
}