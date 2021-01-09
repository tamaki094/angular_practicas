import { Component } from '@angular/core';
import { Usuario, UserType } from '../other/interfaces';
    
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent 
{
  title = 'tutorial';

  
  user:Usuario =
  {
    ID: 1,
    Nombre: "Edri",
    Apellidos: "Angulo",
    Email: "edri.alan.94@gmail.com",
    Nick: "tamaki094",
    Contraseña: "123",
    Tipo: UserType.Administrador
  }

  users:Usuario[] =
  [
    {
      ID: 2,
      Nombre: "Alex",
      Apellidos: "Pepe",
      Email: "pepe.95@gmail.com",
      Nick: "pepe095",
      Contraseña: "123",
      Tipo: UserType.Cliente
    },
    {
      ID: 3,
      Nombre: "Juan",
      Apellidos: "Carlos",
      Email: "carlos.96@gmail.com",
      Nick: "carlos096",
      Contraseña: "123",
      Tipo: UserType.Tecnico
    }
  ]

  user1 : Usuario=<Usuario>
  {
    ID: 4,
    Nombre: "Emma",
    Apellidos: "Frodita",
    Email: "emma.96@gmail.com",
    Nick: "emma096",
    Contraseña: "123",
    Tipo: UserType.Tecnico
  }

  mostrar() : void
  {
    console.log(this.user1.Nombre); //en este caso el IDE sabe los atributos del objeto por que esta casteado
    console.log(this.user.Nombre); //en este caso el IDE sabe los atributos del objeto por que esta dentro de la clase, pero si viniera el objeto de una API el INTELIGENCE del IDE no podria ayudarnos con la informaicon del objeto si no estuviera casteado
  }
}


