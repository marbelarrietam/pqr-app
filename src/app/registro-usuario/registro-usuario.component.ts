import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/Usuario';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiConsumerService } from '../servicios/api-consumer.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  pwdPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,16}$"; 
  user:Usuario = new Usuario();
   isValidFormSubmitted = null;
   formGroupRegistro;

  constructor(private formBuilder:FormBuilder, private router:Router, private service:ApiConsumerService) { }

  ngOnInit() {
    this.iniciarFormularios();
  }
  iniciarFormularios() {
    this.formGroupRegistro = this.formBuilder.group({
      nombre: ['', Validators.compose([Validators.required])],
      apellido: ['', Validators.compose([Validators.required])],
      usuario: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

    
    registrar(){
      this.isValidFormSubmitted = false;
      if (this.formGroupRegistro.invalid) {
         return;
      }
      this.isValidFormSubmitted = true;
      let user: Usuario = this.formGroupRegistro.value;
      this.service.createUsuario(user)
      .subscribe(data=>{
       alert("Se registró correctamente.")
       this.router.navigate(["login"]);
      })
    }

}
