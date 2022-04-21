import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask'

import { HeaderComponent } from './components/templates/header/header.component';
import { HomeComponent } from './view/home/home.component';
import { ZapComponent } from './view/zap/zap.component';
import { CubinhoComponent } from './view/cubinho/cubinho.component';
import { CarrosselComponent } from './view/carrossel/carrossel.component';
import { WhatsAppComponent } from './components/templates/whats-app/whats-app.component';
import { DialogWhatsAppComponent } from './components/templates/whats-app/dialog-whats-app/dialog-whats-app.component';
import { PaginaPadraoComponent } from './components/templates/pagina-padrao/pagina-padrao.component';
import { ImagemApiComponent } from './components/templates/imagem-api/imagem-api.component';
import { CrudUsuarioComponent } from './view/crud-usuario/crud-usuario.component';
import { ComboBoxComponent } from './components/templates/combo-box/combo-box.component';
import { ControleCampoComponent } from './components/templates/controle-campo/controle-campo.component';
import { DatePickerComponent } from './components/templates/date-picker/date-picker.component';
import { GeradorDeSenhaComponent } from './view/gerador-de-senha/gerador-de-senha.component';
import { ButtonComponent } from './components/templates/button/button.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { TextBoxComponent } from './components/templates/text-box/text-box.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';

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
    CarrosselComponent,
    ImagemApiComponent,
    CrudUsuarioComponent,
    ComboBoxComponent,
    TextBoxComponent,
    ControleCampoComponent,
    DatePickerComponent,
    GeradorDeSenhaComponent,
    ButtonComponent,
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
    MatRadioModule,
    HttpClientModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSliderModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
