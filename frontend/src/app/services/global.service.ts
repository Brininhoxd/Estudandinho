import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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

}
