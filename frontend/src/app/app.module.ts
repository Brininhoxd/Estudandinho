import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask'

import { HeaderComponent } from './components/templates/header/header.component';
import { HomeComponent } from './view/home/home.component';
import { ZapComponent } from './view/zap/zap.component';
import { WhatsAppComponent } from './components/templates/whats-app/whats-app.component';
import { DialogWhatsAppComponent } from './components/templates/whats-app/dialog-whats-app/dialog-whats-app.component';
import { PaginaPadraoComponent } from './components/templates/pagina-padrao/pagina-padrao.component';
import { CubinhoComponent } from './view/cubinho/cubinho.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ZapComponent,
    WhatsAppComponent,
    DialogWhatsAppComponent,
    PaginaPadraoComponent,
    CubinhoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule,
    MatInputModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    MatSnackBarModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
