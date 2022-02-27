import { Component, Input, OnInit } from '@angular/core';
import { ControleCampoComponent } from '../controle-campo/controle-campo.component';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent extends ControleCampoComponent {

  constructor() {
    super()
  }

  @Input()
  public mascara: string = ''

}
