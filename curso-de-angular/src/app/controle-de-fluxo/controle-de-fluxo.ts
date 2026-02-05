import { Component } from '@angular/core';

@Component({
  selector: 'app-controle-de-fluxo',
  imports: [],
  templateUrl: './controle-de-fluxo.html',
  styleUrl: './controle-de-fluxo.css',
})
export class ControleDeFluxo {
  media:number = 8;
  linguagem:string = "HTML";
  nomes:string[] = ['Alice', 'Bianca', 'Lais']
}
