import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadboardComponent } from './Components/headboard/headboard.component';
import { ClientsComponent } from './Components/clients/clients.component';
import { EditClientsComponent } from './Components/edit-clients/edit-clients.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { ConfiguracionComponent } from './Components/configuracion/configuracion.component';
import { NoFoundComponent } from './Components/no-found/no-found.component';
import { FooterPageComponent } from './Components/footer-page/footer-page.component';
import { BoardComponent } from './Components/board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadboardComponent,
    ClientsComponent,
    EditClientsComponent,
    LoginComponent,
    RegistroComponent,
    ConfiguracionComponent,
    NoFoundComponent,
    FooterPageComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
