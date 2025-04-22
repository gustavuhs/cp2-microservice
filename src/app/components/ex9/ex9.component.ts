import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex9.component.html',
  styleUrls: ['./ex9.component.css']
})
export class ListaProdutosComponent {
  listaProdutos = [
    { nome: 'Notebook', preco: 2500, emOferta: true },
    { nome: 'Teclado', preco: 200, emOferta: false },
    { nome: 'Monitor', preco: 1200, emOferta: true }
  ];
}