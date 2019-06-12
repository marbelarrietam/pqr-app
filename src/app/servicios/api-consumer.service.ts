import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConsumerService {

  constructor(private http:HttpClient) { }

  URL = 'https://localhost:8080';

  login(credenciales:any){
    return this.http.post<any>(this.URL+"/login",credenciales)
  }
}
