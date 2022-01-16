import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WhatsAppModalData, DialogWhatsAppComponent } from './dialog-whats-app/dialog-whats-app.component';

@Component({
  selector: 'app-whats-app',
  templateUrl: './whats-app.component.html',
  styleUrls: ['./whats-app.component.scss']
})
export class WhatsAppComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  public openModalWhatsApp(): void {

    const data: WhatsAppModalData = {
      celular: '',
      mensagem: ''
    }

    const dialogRef = this.dialog.open(DialogWhatsAppComponent, {
      width: "500px",
      data: data
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result.celular && result.mensagem) {
        this.enviarMensagem(result.celular, result.mensagem)
      } else {
        this.snackBar.open('Preencha os campos corretamente', 'ok', {
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: 'bottom',
        })
      }
    })

  }

  private enviarMensagem(celular: string, mensagem: string) {
    let celucarCompleto = '+55' + celular
    window.open('https://api.whatsapp.com/send?phone=' + celucarCompleto + '&text=' + mensagem);
  }

}
