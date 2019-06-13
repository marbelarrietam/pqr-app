import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiConsumerService } from '../servicios/api-consumer.service';
import { Queja } from '../modelos/Queja';
import { Comentario } from '../modelos/Comentario';

@Component({
  selector: 'app-consultapqr',
  templateUrl: './consultapqr.component.html',
  styleUrls: ['./consultapqr.component.css']
})
export class ConsultapqrComponent implements OnInit {

  busqueda:number;
  cargando = false;
  pqr: Queja;
  resultado = false;
  nuevaRespuesta: Comentario;
  nuevoComentario:string;

  constructor(private router:Router, private service:ApiConsumerService) { }

  ngOnInit() {
  }

  consultar(){
    this.cargando = true;
    this.service.getPqr(this.busqueda)
    .subscribe(data=>{
      this.pqr = new Queja();
      if (data){
        this.cargando = false;
        this.pqr.id = data.id;
        this.pqr.titulo = data.titulo;
        this.pqr.descripcion = data.descripcion; 
        this.pqr.comentarios = data.comentarios;
        this.resultado = true;
      }else{
        alert("No se encontraron resultados");
      }
    },
    error=>{
      this.cargando = false;
      alert("Error con el servicio");
    });
  }

  responder(){
    this.nuevaRespuesta = new Comentario();
    this.nuevaRespuesta.id_queja = this.pqr.id;
    this.nuevaRespuesta.id_usuario = window.localStorage.getItem('id');
    this.nuevaRespuesta.comentario = this.nuevoComentario;
    this.cargando = true;
    console.log(this.pqr)
    this.service.createRespuesta(this.nuevaRespuesta)
    .subscribe(data=>{
      if (data){
        let respuestaGuardada = new Comentario();
        respuestaGuardada = data;
        this.pqr.comentarios.push(respuestaGuardada);
        this.nuevoComentario = '';
        alert("Se ha dado una respuesa");
      }else{
      this.cargando = false;
      alert("Error al procesar su solicitud");
    }

  })
  }
}
