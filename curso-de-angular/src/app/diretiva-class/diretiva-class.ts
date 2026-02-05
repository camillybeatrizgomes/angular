import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-class',
  imports: [CommonModule],
  templateUrl: './diretiva-class.html',
  styleUrl: './diretiva-class.css',
})
export class DiretivaClass {
  alunos:string[] = ['aprovado', 'aprovado', 'reprovado', 'aprovado'];
}
