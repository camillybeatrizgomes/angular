import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  imports: [],
  templateUrl: './primeiro-componente.html',
  styleUrl: './primeiro-componente.css',
})
export class PrimeiroComponente {
  nome: string = 'Camilly';
  media:number = 8;
  pessoa = {
    nome: 'Camilly',
    idade: 22
  }

  mensagem():string {
    return `Olá Mundo!`
  }
}
