import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { FormControl, FormGroup, Validators,  FormBuilder, FormGroupName, FormControlName } from '@angular/forms';
@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  email : any;
  asunto : any;
  mensaje : any;
  alert = false;
  msg : any;
  error = false;
  msgError : any
  constructor(
    private enviar : EmailService
  ) { }

  ngOnInit(): void {
  }


  send(){
    if(this.email != null && this.asunto != null && this.mensaje != null) {
      let body = {
        'email' : this.email,
        'asunto' : this.asunto,
        'mensaje' : this.mensaje
      }
      this.enviar.envio(body).subscribe(res => {
        console.log(res);
        this.alert = true;
        this.msg = "Mensaje Enviado Con Éxito !!"
      },error => {
        console.log(error)
      })
    }else {
      this.error = true;
        this.msgError = "Mensaje No Enviado  !!"
      console.log("Error")
    }



  }

}
