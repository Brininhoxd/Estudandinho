import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-padrao',
  templateUrl: './pagina-padrao.component.html',
  styleUrls: ['./pagina-padrao.component.scss']
})
export class PaginaPadraoComponent  {

  @Input()
  public conteudoCentralizado: boolean = true

  constructor() { }

}
