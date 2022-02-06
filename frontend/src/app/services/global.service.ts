import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  public mostrarMensagem(msg: string, eErro: boolean): void {
    this.snackBar.open(msg, 'ok', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: 'top',
      panelClass: eErro ? ['msg-erro'] : ['msg-sucesso']
    })
  }

  public retornaNumeroAleatorio(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public tratarErro(e: any): Observable<any> {
    this.mostrarMensagem('Ocorreu um erro!', true)
    return EMPTY
  }

}
