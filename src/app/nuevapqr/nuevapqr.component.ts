import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiConsumerService } from '../servicios/api-consumer.service';
import { Queja } from '../modelos/Queja';

@Component({
  selector: 'app-nuevapqr',
  templateUrl: './nuevapqr.component.html',
  styleUrls: ['./nuevapqr.component.css']
})
export class NuevapqrComponent implements OnInit {
  cargando = false;
  formGroupPqr;
  pqr: Queja;
  constructor(private formBuilder:FormBuilder, private router:Router, private service:ApiConsumerService) { }

  ngOnInit() {
    this.iniciarFormularios();
  }

  iniciarFormularios() {
    this.formGroupPqr = this.formBuilder.group({
      titulo: ['', Validators.compose([Validators.required])],
      descripcion: ['', Validators.compose([Validators.required])]
    });
  }

  crear(){
    this.pqr = new Queja();
    this.pqr['titulo'] = this.formGroupPqr.value.titulo;
    this.pqr['descripcion'] = this.formGroupPqr.value.descripcion;
    this.pqr['id_usuario'] = window.localStorage.getItem('id');
    this.cargando = true;
    console.log(this.pqr)
    this.service.createPqr(this.pqr)
    .subscribe(data=>{
      if (data){
        let quejaGuardada = new Queja();
        quejaGuardada = data;
        console.log(quejaGuardada)
        alert("Se ha radicado su pqr con el numero "+quejaGuardada.id);
      }else{
      this.cargando = false;
      alert("Error al procesar su solicitud");
    }

  })
}

}
