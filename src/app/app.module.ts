import { IdbService } from './Services/idb.service';
import { AngularFireAuth, AngularFireAuthModule } from  "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';

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
import { LoadingComponent } from './Components/loading/loading.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

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
    BoardComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'control-clientes'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule
  ],
  providers: [IdbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
