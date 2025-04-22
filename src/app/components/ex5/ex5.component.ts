import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-situacao-pedido',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ex5.component.html',
  styleUrls: ['./ex5.component.css']
})
export class SituacaoPedidoComponent {
  situacao: string = 'analise'; // Valor inicial
}
