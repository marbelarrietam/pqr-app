import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/Usuario';
import { ApiConsumerService } from '../servicios/api-consumer.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:Usuario = new Usuario();
  credenciales={};
  OK_STATUS = 'ok';
  userId: string;
  cargando = false;

  formGroupUsuarioLogin;
  constructor( private formBuilder: FormBuilder, private router:Router, private service:ApiConsumerService, public appComponent:AppComponent) { }

  ngOnInit() {
    this.iniciarFormularios();
  }

  iniciarFormularios() {
    this.formGroupUsuarioLogin = this.formBuilder.group({
      usuario: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  storeSecurityToken(token, nombre, id){
    window.localStorage.setItem ("token", token);
    window.localStorage.setItem ("username",nombre);
    window.localStorage.setItem ("id",id);
  }

  login(){
    this.credenciales['usuario'] = this.formGroupUsuarioLogin.value.usuario;
    this.credenciales['password'] = this.formGroupUsuarioLogin.value.password;
    this.cargando = true;
    this.service.login(this.credenciales)
    .subscribe(data=>{
      let response = data;
      if (response.status == this.OK_STATUS){
         this.userId = response.userId;
      if (response.token!= null){
        this.appComponent.autenticado = true;
         this.storeSecurityToken(response.token, response.username, response.userId);
         this.cargando = false;
         this.router.navigate(["nueva"]);
      }
    }else{
      this.cargando = false;
      alert("Error al iniciar sesion");
    }

  })
}

}
