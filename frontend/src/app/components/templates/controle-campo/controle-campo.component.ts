import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-controle-campo',
  templateUrl: './controle-campo.component.html',
  styleUrls: ['./controle-campo.component.scss']
})
export class ControleCampoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private _label: string = '';
  public get label(): string {
    return this._label;
  }
  @Input()
  public set label(value: string) {
    this._label = value;
  }

  @Output()
  public ngModelAppChange = new EventEmitter();

  private _ngModelApp: any;
  public get ngModelApp(): any {
    return this._ngModelApp;
  }
  @Input()
  public set ngModelApp(value: any) {
    this._ngModelApp = value;
    this.ngModelAppChange.emit(value);
  }

}
