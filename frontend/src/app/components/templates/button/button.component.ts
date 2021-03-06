import { ControleCampoComponent } from './../controle-campo/controle-campo.component';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends ControleCampoComponent {

  constructor() {
    super()
  }

  @Input()
  nomeIcone: string = ''

  @Output()
  ClickBotao = new EventEmitter()

  clickEvent() {
    this.ClickBotao.emit()
  }
}
