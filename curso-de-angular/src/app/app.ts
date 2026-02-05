import { Component, signal } from '@angular/core';
import { PrimeiroComponente } from "./primeiro-componente/primeiro-componente";
import { DataBindings } from "./data-bindings/data-bindings";
import { Formulario } from "./formulario/formulario";
import { ControleDeFluxo } from "./controle-de-fluxo/controle-de-fluxo";
import { DiretivaStyle } from "./diretiva-style/diretiva-style";
import { DiretivaClass } from "./diretiva-class/diretiva-class";
import { DiretivaCustomizada } from "./diretiva-customizada/diretiva-customizada";
import { FormularioReativo } from "./formulario-reativo/formulario-reativo";
import { Bootstrap } from "./bootstrap/bootstrap";
import { ProjetoCrud } from "./projeto-crud/projeto-crud";

@Component({
  selector: 'app-root',
  imports: [ProjetoCrud],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('curso-de-angular');
}
