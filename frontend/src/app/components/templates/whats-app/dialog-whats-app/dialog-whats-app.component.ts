import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface WhatsAppModalData {
  celular: string;
  mensagem: string;
}


@Component({
  selector: 'app-dialog-whats-app',
  templateUrl: './dialog-whats-app.component.html',
  styleUrls: ['./dialog-whats-app.component.scss']
})
export class DialogWhatsAppComponent implements OnInit {

  public maskFone: string = '(00)0 0000-0000';

  constructor(
    public dialogRef: MatDialogRef<DialogWhatsAppComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WhatsAppModalData
  ) {
    
  }

  ngOnInit(): void {
  }

}
