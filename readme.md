# Angular

Angular é um framework JavaScript (usando TypeScript) que ajuda a criar sites e aplicações web de forma organizada, rápida e moderna.

Ele foi feito pela Google e é muito usado em empresas por ser estruturado, escalável e cheio de ferramentas prontas.

## Sua instalação

Para começar a usar o Angular, você precisa ter o **Node.js** e o **npm** instalado no seu computador. Depois, siga estes passos:

Instale o Angular CLI (ferramenta de linha de comando) globalmente com o comando:
   ```
   npm install -g @angular/cli
   ```

Caso queira especificar uma versão do Angular CLI, você pode fazer assim:
   ```
   npm install -g @angular/cli@<versão> (20.0.0, por exemplo)
   ```

Para verificar se a instalação foi bem-sucedida, use o comando:
   ```
   ng version
   ```

## Criando um projeto Angular

Para criar um novo projeto Angular, use o comando:
   ```
    ng new nome-do-projeto
   ```

Isso vai criar uma nova pasta com todos os arquivos necessários para começar a desenvolver sua aplicação.

Para rodar o servidor de desenvolvimento e ver sua aplicação no navegador, entre na pasta do projeto e use o comando:
   ```
    cd nome-do-projeto
    ng s 
   ```

Depois, basta entrar no navegador e ir para `http://localhost:4200/` para ver sua aplicação em ação.

## Componentes

No Angular, tudo gira em torno de componentes. Um componente é uma parte da interface do usuário que tem seu próprio HTML, CSS e lógica em TypeScript. Você pode criar novos componentes usando o Angular CLI com o comando:
   ```
    ng generate component nome-do-componente
   ```
Ou, de forma abreviada:
   ```
    ng g c nome-do-componente
   ```

O componente criado terá quatro arquivos principais:
- `nome-do-componente.component.ts`: arquivo TypeScript com a lógica do componente.
- `nome-do-componente.component.html`: arquivo HTML com o template do componente.
- `nome-do-componente.component.css`: arquivo CSS com o estilo do componente.
- `nome-do-componente.component.spec.ts`: arquivo para testes do componente.

Para usar o componente em sua aplicação, você precisa adicioná-lo ao template do componente pai, geralmente `app.html`, e adicionar o seletor do componente, que pode ser encontrado no arquivo `.ts` do componente. Esse seletor geralmente tem o formato `<app-nome-do-componente></app-nome-do-componente>`, com ele você pode inserir o componente onde quiser na sua aplicação.

## Interpolação de Texto

A interpolação de texto no Angular permite que você insira valores dinâmicos dentro do seu HTML. Você pode fazer isso usando chaves duplas `{{ }}`. Por exemplo, se você tiver uma variável chamada `titulo` no seu componente TypeScript, você pode exibi-la no HTML assim:
   ```html
   <h1>{{ titulo }}</h1>
   ```
Também é possível realizar operações diretamente na interpolação, como:
   ```html
   <p>O resultado de 2 + 2 é {{ 2 + 2 }}</p>
   ```
Podemos até criar condições simples, usando o operador ternário:
   ```html
   <p>{{ usuarioLogado ? 'Bem-vindo de volta!' : 'Por favor, faça login.' }}</p>
   ```
É possível utilizar funções e métodos definidos no componente:
   ```html
   <p>{{ obterMensagem() }}</p>
   ```
Onde `obterMensagem()` é uma função definida no arquivo TypeScript do componente.

Além disso, você pode acessar propriedades de objetos e arrays:
   ```html
   <p>Nome do usuário: {{ usuario.nome }}</p>
   <p>Primeiro item da lista: {{ itens[0] }}</p>
   ```
A interpolação de texto é uma maneira poderosa e simples de tornar sua aplicação Angular dinâmica e interativa, permitindo que você exiba dados diretamente no seu HTML de forma eficiente.

## Data Binding

Os data bindings são maneiras de conectar os dados do componente (TypeScript) com o template (HTML) de forma dinâmica. Existem quatro tipos principais de data bindings no Angular:

1. **Interpolação de Texto**: Usada para exibir valores dinâmicos no HTML. Exemplo:
   ```html
   <h1>{{ titulo }}</h1>
   ```
2. **Property Binding**: Permite definir propriedades de elementos HTML com valores do componente. Exemplo:
   ```html
   <img [src]="imagemUrl">
   ```
3. **Event Binding**: Usado para capturar eventos do usuário, como cliques, e chamar métodos do componente. Exemplo:
   ```html
   <button (click)="fazerAlgo()">Clique aqui</button>
   ```
4. **Two-Way Binding**: Combina property binding e event binding para sincronizar dados entre o componente e o template. Exemplo:
   ```html
   <input [(ngModel)]="nome">
   ```

Para trabalhar com cada data binding, utilizamos as seguintes estruturas respectivamentes:

- {{}} -> Interpolation;
- [] -> Property;
- () -> Event;
- [()] -> Two-way.

## FormsModule

O FormsModule é um módulo do Angular que facilita o trabalho com formulários, permitindo a criação, validação e manipulação de dados de forma simples e eficiente.

Para usar o FormsModule, você precisa importá-lo no arquivo do módulo da sua aplicação (geralmente `app.module.ts`). Veja como fazer isso:

```typescript
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    // seus componentes aqui
  ],
  imports: [
    // outros módulos aqui
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
Depois de importar o FormsModule, você pode usar diretivas como `ngModel` para criar formulários com two-way data binding. Por exemplo:

```html
<input [(ngModel)]="nome" placeholder="Digite seu nome">
<p>Olá, {{ nome }}!</p>
```
Caso o input esteja dentro de um formulário, é recomendado adicionar o atributo `name` ao input para evitar erros:

```html
<form>
  <input [(ngModel)]="nome" name="nomeInput" placeholder="Digite seu nome">
   <p>Olá, {{ nome }}!</p>
</form>
```

## Controle de Fluxo

O controle de fluxo é responsável por criar uma página HTML mais dinâmica. Esses são alguns dos principais controles de fluxo no Angular:
- @if: Estrutura que utiliza uma condicional, além do @if, podemos utilizar o @elseif e o @else.
- @for: Estrutura de repetição que itera sobre listas ou arrays.
- @switch: Estrutura que permite múltiplas condições baseadas em um valor.

Exemplos:

```html
@if (condicao) {
  <p>Condição verdadeira!</p>
@else
   <p>Condição falsa!</p>
}


@for (let item of lista) {
  <p>{{ item }}</p>
}


@switch (valor) {
  @case="1"
    <p>Valor é 1</p>
  @break
  @case="2"
    <p>Valor é 2</p>
  @break
  @default
    <p>Valor não é 1 nem 2</p>
}
```

## Diretivas

Diretivas são comandos para deixar nossas páginas HTML mais dinâmicas. Boa parte das diretivas precisam ter o CommonModule importado no arquivo .ts do componente.

Algumas diretivas estão depreciadas a partir da versão 20 do framework, ou seja, não devem mais ser utilizadas. As diretivas depreciadas são:
- ngIf
- ngFor
- ngSwitch

De acordo com o site oficial do Angular, provavelmente na versão 22 do framework não será possível utilizar as três diretivas citadas.

As diretivas mais comuns são:
- `ngModel`: Diretiva de two-way data binding usada em formulários.
- `ngClass`: Permite adicionar ou remover classes CSS dinamicamente com base em condições.
- `ngStyle`: Permite aplicar estilos CSS dinamicamente com base em condições.

## Diretiva ngStyle

A diretiva `ngStyle` no Angular é usada para aplicar estilos CSS dinamicamente a um elemento HTML com base em expressões do componente. Isso permite que você altere o estilo de um elemento de forma condicional, tornando sua aplicação mais interativa e responsiva. Seu uso pode ser feito de duas maneiras principais: usando um objeto ou uma string.
```html
<!-- Usando uma string -->
<div [ngStyle]="{'color': corTexto, 'font-size.px': tamanhoFonte}">
  Este texto terá a cor e o tamanho definidos dinamicamente.
</div>
<!-- Usando um objeto -->
<div [ngStyle]="estilosDinamicos">
  Este texto terá a cor e o tamanho definidos dinamicamente.
```
No arquivo TypeScript do componente, você pode definir as variáveis `corTexto` e `tamanhoFonte`:
```typescript
// Usando string
export class MeuComponente {
  corTexto: string = 'blue';
  tamanhoFonte: number = 20;
}
// Usando objeto
export class MeuComponente {
  estilosDinamicos = {
    'color': 'blue',
    'font-size.px': 20
  };
}
```

## Diretiva ngClass
A diretiva `ngClass` no Angular é usada para adicionar ou remover classes CSS dinamicamente em um elemento HTML com base em expressões do componente. Isso permite que você altere a aparência de um elemento de forma condicional, tornando sua aplicação mais interativa e responsiva. 

Seu uso pode ser feito de três maneiras principais: usando uma string, um array ou um objeto.
```html
<!-- Usando uma string -->
<div [ngClass]="classeDinamica">
  Este texto terá a classe definida dinamicamente.
</div>
<!-- Usando um array -->
<div [ngClass]="[classe1, classe2]">
  Este texto terá as classes definidas dinamicamente.
</div>
<!-- Usando um objeto -->
<div [ngClass]="{'classe-ativa': estaAtivo, 'classe-inativa': !estaAtivo}">
  Este texto terá as classes definidas dinamicamente.
</div>
```
No arquivo TypeScript do componente, você pode definir as variáveis `classeDinamica`, `classe1`, `classe2` e `estaAtivo`:
```typescript
export class MeuComponente {
  classeDinamica: string = 'minha-classe';
  classe1: string = 'classe-um';
  classe2: string = 'classe-dois';
  estaAtivo: boolean = true;
}
```
No arquivo CSS, você pode definir as classes:
```css
.minha-classe {
  color: red;
}
.classe-um {
  font-weight: bold;
}
.classe-dois {
  text-decoration: underline;
}
.classe-ativa {
  background-color: green;
}
.classe-inativa {
  background-color: gray;
}
```
Dessa forma, você pode usar a diretiva `ngClass` para alterar dinamicamente as classes CSS de um elemento com base nas condições definidas no seu componente Angular.

## Diretivas Customizadas
As diretivas customizadas permitem que você crie suas próprias diretivas para adicionar comportamentos personalizados aos elementos HTML em sua aplicação Angular. 

Para criar uma diretiva customizada, você pode usar o Angular CLI com o comando:
   ```
   ng generate directive nome-da-diretiva
   ```
Ou, de forma abreviada:
   ```
    ng g d nome-da-diretiva
    ```
Isso criará um arquivo TypeScript para a diretiva, onde você pode definir o comportamento desejado. Aqui está um exemplo simples de uma diretiva que altera a cor do texto de um elemento quando o mouse passa sobre ele:
```typescript
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() highlightColor: string = 'yellow';
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
```

## Formulários Reativos
Os formulários reativos são uma abordagem para criar formulários no Angular que oferece mais controle e flexibilidade sobre a validação e o gerenciamento dos dados do formulário. Diferente dos formulários baseados em template, os formulários reativos são definidos e gerenciados no arquivo TypeScript do componente.

Para usar formulários reativos, você precisa importar o módulo `ReactiveFormsModule` no arquivo do módulo da sua aplicação (geralmente `app.ts`) ou também no módulo específico do componente onde o formulário será usado. Veja como fazer isso:
```typescript
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    // seus componentes aqui
  ],
  imports: [
    // outros módulos aqui
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
Depois de importar o `ReactiveFormsModule`, você pode criar um formulário reativo no seu componente. Aqui está um exemplo básico:
```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-meu-formulario',
  templateUrl: './meu-formulario.component.html'
})
export class MeuFormularioComponent {
  pessoa = new FormGroup({
    nome : new FormControl(),
    idade : new FormControl()
  });
}
```
No arquivo HTML do componente, você pode vincular o formulário reativo usando a diretiva `formGroup` e os controles individuais usando a diretiva `formControlName`:
```html
<form [formGroup]="pessoa" (ngSubmit)="onSubmit()">
  <label for="nome">Nome:</label>
  <input id="nome" formControlName="nome">
  
  <label for="idade">Idade:</label>
  <input id="idade" formControlName="idade" type="number">
  
  <button type="submit">Enviar</button>
</form>
```
Com essa configuração, você pode gerenciar os dados do formulário diretamente no arquivo TypeScript do componente, facilitando a validação e o processamento dos dados enviados pelo usuário.

## Validators
Os Validators são funções usadas em formulários reativos no Angular para garantir que os dados inseridos pelos usuários atendam a certos critérios antes de serem processados ou enviados. Eles ajudam a manter a integridade dos dados e a fornecer feedback ao usuário sobre possíveis erros.

Para usar Validators, você precisa importá-los do módulo `@angular/forms`. Aqui estão alguns dos Validators mais comuns:
- `Validators.required`: Garante que o campo não esteja vazio.
- `Validators.minLength(length: number)`: Garante que o valor tenha um comprimento mínimo.
- `Validators.maxLength(length: number)`: Garante que o valor não exceda um comprimento máximo.
- `Validators.pattern(pattern: string | RegExp)`: Garante que o valor corresponda a um padrão específico (expressão regular).

Aqui está um exemplo de como usar Validators em um formulário reativo:
```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-meu-formulario',
  templateUrl: './meu-formulario.component.html'
})
export class MeuFormularioComponent {
  pessoa = new FormGroup({
    nome : new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade : new FormControl('', [Validators.required, Validators.min(0)])
  });
}
```
No arquivo HTML do componente, você pode exibir mensagens de erro com base na validação:
```html
<form [formGroup]="pessoa" (ngSubmit)="onSubmit()">
  <label for="nome">Nome:</label>
  <input id="nome" formControlName="nome">
  <div *ngIf="pessoa.get('nome')?.invalid && pessoa.get('nome')?.touched">
    <small *ngIf="pessoa.get('nome')?.errors?.['required']">O nome é obrigatório.</small>
    <small *ngIf="pessoa.get('nome')?.errors?.['minlength']">O nome deve ter pelo menos 3 caracteres.</small>
  </div>
  
  <label for="idade">Idade:</label>
  <input id="idade" formControlName="idade" type="number">
  <div *ngIf="pessoa.get('idade')?.invalid && pessoa.get('idade')?.touched">
    <small *ngIf="pessoa.get('idade')?.errors?.['required']">A idade é obrigatória.</small>
    <small *ngIf="pessoa.get('idade')?.errors?.['min']">A idade deve ser um número positivo.</small>
  </div>
  
  <button type="submit" [disabled]="pessoa.invalid">Enviar</button>
</form>
```

## Bootstrap
O Bootstrap é um recurso muito utilizado em projetos Angular para facilitar a criação de interfaces responsivas e visualmente atraentes. Ele oferece uma coleção de estilos CSS e componentes prontos que podem ser facilmente integrados ao seu projeto.

Para usar o Bootstrap em um projeto Angular, você pode seguir estes passos:
1. Instale o Bootstrap via npm:
   ```
   npm install bootstrap
   ```
2. Depois de instalar, você precisa incluir o arquivo CSS do Bootstrap no seu projeto. Abra o arquivo `angular.json` e adicione o caminho para o arquivo CSS do Bootstrap na seção `styles`:
   ```json
    "styles": [
      "node_modules/bootstrap/dist/css/bootstrap.min.css",
      "src/styles.css"
    ],
    ```
3. Agora você pode usar as classes e componentes do Bootstrap diretamente nos seus templates HTML. Por exemplo, para criar um botão estilizado com Bootstrap, você pode fazer o seguinte:
    ```html
    <button class="btn btn-primary">Clique aqui</button>
    ```
Com esses passos, você estará pronto para usar o Bootstrap em seu projeto Angular, aproveitando seus recursos para criar uma interface de usuário moderna e responsiva com facilidade.

## Projeto CRUD 

O projeto terá as seguintes funcionalidades:
1. Cadastrar: nome, idade e cidade.
2. Selecionar: exibir o nome, idade e a cidade em uma tabela.
3. Alterar: possibilidade de alteração do nome, idade e cidade.
4. Remover: remoção de registros.
5. Cancelar: cancelar as ações de alteração e remoção.

### Primeira Etapa: Criar um componente
Para criar um componente chamado "projeto-crud", você pode usar o Angular CLI com o seguinte comando:
   ```
   ng g c projeto-crud
   ```

### Segunda Etapa: Estruturar formulário
No arquivo HTML do componente `projeto-crud.component.html`, você pode estruturar o formulário com os seguintes campos: nome, idade e cidade. Além disso, adicione botões para as ações de cadastrar, alterar, remover e cancelar.

Além disso, no arquivo CSS do componente `projeto-crud.component.css`, você pode adicionar estilos para melhorar a aparência do formulário e da tabela.

### Terceira Etapa: Estruturar tabela
No arquivo HTML do componente `projeto-crud.component.html`, você pode estruturar a tabela para exibir os registros cadastrados. A tabela deve ter colunas para nome, idade, cidade e selecionar (para alterar ou remover registros).

### Quarta Etapa: Visibilidade dos Botões
No arquivo TypeScript do componente `projeto-crud.component.ts`, você pode criar variáveis booleanas para controlar a visibilidade dos botões de alterar, remover e cancelar. Inicialmente, esses botões devem estar ocultos.
No arquivo HTML do componente `projeto-crud.component.html`, você pode usar a diretiva `@if` para exibir ou ocultar os botões com base nas variáveis booleanas criadas no TypeScript.
```html
// No HTML
@if (mostrarBotaoCadastrar) {
  <button>Cadastrar</button>
} @else {
  <button>Alterar</button>
  <button>Remover</button>
  <button>Cancelar</button>
}
```
```typescript
// No typeScript
export class ProjetoCrudComponent {
  mostrarBotaoCadastrar: boolean = true;
}
```

### Quinta Etapa: Formulário Reativo
No arquivo TypeScript do componente `projeto-crud.component.ts`, você pode importar os módulos necessários para criar um formulário reativo. Em seguida, crie um `FormGroup` com os campos nome, idade e cidade, e adicione validadores para garantir que os campos sejam preenchidos corretamente.
```typescript
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
export class ProjetoCrudComponent {
  pessoa = new FormGroup({
    nome: new FormControl(''),
    idade: new FormControl(''),
    cidade: new FormControl('')
  });
}
```
No arquivo HTML do componente `projeto-crud.component.html`, você pode vincular o formulário reativo usando a diretiva `formGroup` e os controles individuais usando a diretiva `formControlName`.
```html
<form [formGroup]="pessoa">
  <input formControlName="nome" placeholder="Nome">
  <input formControlName="idade" placeholder="Idade" type="number">
  <input formControlName="cidade" placeholder="Cidade">
</form>
```

### Sexta Etapa: Validar formulário
No arquivo TypeScript do componente `projeto-crud.component.ts`, você pode adicionar validadores aos campos do formulário para garantir que os dados sejam inseridos corretamente. Por exemplo, você pode usar `Validators.required` para tornar os campos obrigatórios.
```typescript
import { Validators } from '@angular/forms';
export class ProjetoCrudComponent {
  pessoa = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    idade: new FormControl('', [Validators.required, Validators.min(0)]),
    cidade: new FormControl('', [Validators.required])
  });
}
```
No arquivo HTML do componente `projeto-crud.component.html`, você pode adicionar um recurso para ser desabilitado o botão de cadastrar quando o formulário for inválido.
```html
<button [disabled]="pessoa.invalid">Cadastrar</button>
```

### Sétima Etapa: Modelo
Para organizar melhor o código, você pode criar um modelo (classe) para representar uma pessoa com os atributos nome, idade e cidade. Crie uma pasta chamada `modelo`, dentro um arquivo chamado `Pessoa.ts` e defina a classe da seguinte forma:
```typescript
export class Pessoa {
    nome?:string; // O ponto de interrogação indica que o atributo é opcional
    idade?:number;
    cidade?:string;
}
```

### Oitava Etapa: Vetor
No arquivo TypeScript do componente `projeto-crud.component.ts`, você pode criar um vetor para armazenar os registros das pessoas cadastradas. Utilize o modelo `Pessoa` criado na etapa anterior para definir o tipo do vetor.
```typescript
import { Pessoa } from './modelo/Pessoa';
export class ProjetoCrudComponent {
  // ...
  pessoas: Pessoa[] = []; // Vetor chamado pessoas para armazenar os registros
}
```

### Nona Etapa: Cadastro e Listagem
No arquivo TypeScript do componente `projeto-crud.component.ts`, você pode criar um método para cadastrar uma nova pessoa. Esse método deve adicionar o objeto `pessoa` ao vetor `pessoas` e, em seguida, limpar os campos do formulário.
```typescript
cadastrar() {
  this.pessoas.push(this.pessoa.value as Pessoa); // Adiciona a pessoa ao vetor
  this.pessoa.reset(); // Limpa os campos do formulário
}
```
No arquivo HTML do componente `projeto-crud.component.html`, você pode criar uma tabela para listar as pessoas cadastradas. Utilize a diretiva `@for` para iterar sobre o vetor `pessoas` e exibir os dados na tabela.
```html
<thead> <!-- Adicionar a função 'cadastrar()' ao botão de cadastro -->
  @if (mostrarBotaoCadastrar) {
    <input type="button" (click)="cadastrar()" value="Cadastrar">
  }
</thead>
<tbody>
  @for (let pessoa of pessoas; let i = index) {
    <tr>
      <td>{{ pessoa.nome }}</td>
      <td>{{ pessoa.idade }}</td>
      <td>{{ pessoa.cidade }}</td>
      <td>
        <button>Selecionar</button>
      </td>
    </tr>
  }
</tbody>
```

### Décima Etapa: Seleção
No arquivo TypeScript do componente `projeto-crud.component.ts`, você pode criar um método para selecionar uma pessoa da tabela. Esse método deve preencher os campos do formulário com os dados da pessoa selecionada e alterar a visibilidade dos botões.
```typescript
indiceSelecionado: number = -1; // Variável para armazenar o índice da pessoa selecionada
selecionar(indice: number) {
  this.indiceSelecionado = indice; // Armazena o índice da pessoa selecionada

  this.pessoa.get('nome')?.setValue(this.vetor[indice].nome || ''); // Preenche os campos do formulário de acordo com a pessoa selecionada
  this.pessoa.get('idade')?.setValue(this.vetor[indice].idade?.toString() || '');
  this.pessoa.get('cidade')?.setValue(this.vetor[indice].cidade || '');

  this.btnCadastrar = false; // Altera a visibilidade dos botões
}
```
No arquivo HTML do componente `projeto-crud.component.html`, você pode adicionar a função de seleção ao botão "Selecionar" na tabela.
```html
<td>
  <button (click)="selecionar(i)">Selecionar</button>
</td>
```

### Décima Primeira Etapa: Cancelar
No arquivo TypeScript do componente `projeto-crud.component.ts`, você pode criar um método para cancelar a ação de seleção. Esse método deve limpar os campos do formulário e restaurar a visibilidade dos botões.
```typescript
cancelar() {
  this.pessoa.reset(); // Limpa os campos do formulário
  this.indiceSelecionado = -1; // Reseta o índice da pessoa selecionada
  this.btnCadastrar = true; // Restaura a visibilidade dos botões
}
```
No arquivo HTML do componente `projeto-crud.component.html`, você pode adicionar a função de cancelamento ao botão "Cancelar".
```html
<button (click)="cancelar()">Cancelar</button>
```

### Décima Segunda Etapa: Alterar
No arquivo TypeScript do componente `projeto-crud.component.ts`, você pode criar um método para alterar os dados da pessoa selecionada. Esse método deve atualizar o objeto no vetor `pessoas` com os novos valores do formulário e, em seguida, limpar os campos do formulário e restaurar a visibilidade dos botões.
```typescript
alterar():void {
  this.vetor[this.indicePessoaSelecionada] = this.pessoa.value as Pessoa; // Atualiza o objeto no vetor com os novos valores do formulário
  this.cancelar(); // Limpa os campos do formulário e restaura a visibilidade dos botões
}
```
No arquivo HTML do componente `projeto-crud.component.html`, você pode adicionar a função de alteração ao botão "Alterar".
```html
<button (click)="alterar()">Alterar</button>
```

### Décima Terceira Etapa: Remover
No arquivo TypeScript do componente `projeto-crud.component.ts`, você pode criar um método para remover a pessoa selecionada. Esse método deve remover o objeto do vetor `pessoas` com base no índice da pessoa selecionada e, em seguida, limpar os campos do formulário e restaurar a visibilidade dos botões.
```typescript
remover():void {
  this.vetor.splice(this.indicePessoaSelecionada, 1); // Remove o objeto do vetor com base no índice da pessoa selecionada
  this.cancelar(); // Limpa os campos do formulário e restaura a visibilidade dos botões
}
```
No arquivo HTML do componente `projeto-crud.component.html`, você pode adicionar a função de remoção ao botão "Remover".
```html
<button (click)="remover()">Remover</button>
```
Com essas etapas concluídas, você terá um projeto CRUD funcional em Angular, permitindo cadastrar, listar, alterar e remover registros de pessoas com nome, idade e cidade.