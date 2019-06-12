import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { ApiConsumerService } from '../servicios/api-consumer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private service:ApiConsumerService, public appComponent:AppComponent) { }

  ngOnInit() {
  }

}
