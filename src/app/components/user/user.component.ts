import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [
    './user.component.sass',
    '/node_modules/bootstrap/dist/css/bootstrap.min.css'
  ]
})
export class UserComponent  {
  
  isLogged: boolean = false
  nivel: number = 4
  nombre_usuario: string = "Edri Alan"
  
  constructor() 
  { 

  }

  addNivel()
  {
    this.nivel += 1;
  }

  substractNivel()
  {
    this.nivel -= 1;
  }
}
