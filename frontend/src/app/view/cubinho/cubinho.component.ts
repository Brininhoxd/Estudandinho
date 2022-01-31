import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cubinho',
  templateUrl: './cubinho.component.html',
  styleUrls: ['./cubinho.component.scss']
})
export class CubinhoComponent {

  constructor() { }

  public statusCubo: { codigo: number, descricao: string }[] = [
    { codigo: 1, descricao: "FRENTE" },
    { codigo: 2, descricao: "ATRÁS" },
    { codigo: 3, descricao: "DIREITA" },
    { codigo: 4, descricao: "ESQUERDA" },
    { codigo: 5, descricao: "CIMA" },
    { codigo: 6, descricao: "BAIXO" },
    { codigo: 7, descricao: "ANIMAÇÃO" },
  ]

  public status: number = 1
  public classeAtual: string = ''


  public radioChange(valor: any) {
    const cubo = document.querySelector('.cubo');

    let statusAtual = 'status-' + valor.value

    if (this.classeAtual) {
      cubo?.classList.remove(this.classeAtual);
    }

    cubo?.classList.add(statusAtual);
    this.classeAtual = statusAtual;

  }

}
