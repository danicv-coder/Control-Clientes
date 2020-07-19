import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './Components/board/board.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { ConfiguracionComponent } from './Components/configuracion/configuracion.component';
import { EditClientsComponent } from './Components/edit-clients/edit-clients.component';
import { NoFoundComponent } from './Components/no-found/no-found.component';


const routes: Routes = [
    {path: '', component: BoardComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'configuracion', component: ConfiguracionComponent},
    {path: 'client/edit/:id', component: EditClientsComponent},
    {path: '**', component: NoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
