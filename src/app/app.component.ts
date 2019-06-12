import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pqr-app';
  autenticado = false;

  constructor(private router:Router){}

  Logout(){
    window.localStorage.removeItem("token");
    this.autenticado = false;
    this.router.navigate(['login']);
  }
}
