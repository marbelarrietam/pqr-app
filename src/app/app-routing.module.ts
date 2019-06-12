import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { NuevapqrComponent } from './nuevapqr/nuevapqr.component';
import { ConsultapqrComponent } from './consultapqr/consultapqr.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'registro', component:RegistroUsuarioComponent},
  {path: 'nueva', component:NuevapqrComponent},
  {path: 'consulta', component:ConsultapqrComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
