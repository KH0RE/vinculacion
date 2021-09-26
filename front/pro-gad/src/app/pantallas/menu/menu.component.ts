import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router : Router,
  ) { }

  ngOnInit(): void {
  }

  home(){
    this.router.navigate(['gad/'])
  }
  autoridades(){
    this.router.navigate(['gad/autoridades'])
  }
  historia(){
    this.router.navigate(['gad/historia'])
  }
  turismo(){
    this.router.navigate(['gad/turismo'])
  }
  contactos(){
    this.router.navigate(['gad/contactos'])
  }
  vision(){
    this.router.navigate(['gad/quienes-somos'])
  }

}
