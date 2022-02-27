import { Component, OnInit } from '@angular/core';
import { ComboBoxDataSource } from 'src/app/components/templates/combo-box/combo-box.component';

@Component({
  selector: 'app-crud-usuario',
  templateUrl: './crud-usuario.component.html',
  styleUrls: ['./crud-usuario.component.scss']
})
export class CrudUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // * NgModels
  public ngModelNome: string = ''
  public ngModelRg: string = ''
  public ngModelCpf: string = ''
  public ngModelDataNascimento: Date = new Date()

  // public testeNgDataSource: ComboBoxDataSource[] = [
  //   {
  //     Valor: 0,
  //     Descricao: "teste0"
  //   },
  //   {
  //     Valor: 1,
  //     Descricao: "teste1"
  //   },
  //   {
  //     Valor: 2,
  //     Descricao: "teste2"
  //   },
  // ]

}
