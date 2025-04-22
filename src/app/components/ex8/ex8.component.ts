import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-validacao',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ex8.component.html',
  styleUrls: ['./ex8.component.css']
})
export class LoginValidacaoComponent {
  loginEmail: string = '';
  loginSenha: string = '';
}
