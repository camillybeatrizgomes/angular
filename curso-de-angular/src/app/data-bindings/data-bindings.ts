import { Component } from '@angular/core';

@Component({
  selector: 'app-data-bindings',
  imports: [],
  templateUrl: './data-bindings.html',
  styleUrl: './data-bindings.css',
})
export class DataBindings {
  imagem:string = 'dia.jpg';

  alterarImagem():void {
    this.imagem = this.imagem == 'dia.jpg' ? 'noite.jpg':'dia.jpg';
  }
}
