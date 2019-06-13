import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modelos/Usuario';
import { Queja } from '../modelos/Queja';
import { Comentario } from '../modelos/Comentario';

@Injectable({
  providedIn: 'root'
})
export class ApiConsumerService {

  constructor(private http:HttpClient) { }

  URL = 'http://localhost:8080/api';

  login(credenciales:any){
    return this.http.post<any>(this.URL+"/login",credenciales)
  }

  getUsuarios(){
    return this.http.get<Usuario[]>(this.URL+'/usuarios');
  }

  createPqr(queja:Queja){
    return this.http.post<Queja>(this.URL+'/queja',queja);
  }

  createRespuesta(respuesta:Comentario){
    return this.http.post<Comentario>(this.URL+'/comentario',respuesta);
  }

  createUsuario(usuario:Usuario){
    return this.http.post<Usuario>(this.URL+'/usuarios',usuario);
  }

  getPqr(radicado:number){
    return this.http.get<Queja>(this.URL+'/queja/'+radicado);
  }


  
}
