import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControleCampoComponent } from '../controle-campo/controle-campo.component';

export interface ComboBoxDataSource {
  Valor: number,
  Descricao: string
}

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.scss']
})
export class ComboBoxComponent extends ControleCampoComponent {

  constructor() { 
    super()
  }

  private _ngDataSource: ComboBoxDataSource[] = [];
  public get ngDataSource(): ComboBoxDataSource[] {
    return this._ngDataSource;
  }
  @Input()
  public set ngDataSource(value: ComboBoxDataSource[]) {
    this._ngDataSource = value;
  }

}
