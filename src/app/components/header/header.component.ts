import { 
  Component, 
  OnInit 
} from '@angular/core';

@Component({
  selector: 'tut-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'] 
})
export class HeaderComponent implements OnInit  
{
  nombre = "Alan"
  arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  constructor() 
  { 
    console.log("Componente header creado")
  }

  ngOnInit()
  {
    console.log("Componente creado")
  }

  cambiarNombre()
  {
    this.nombre += "Juanito";
  }

  add()
  {
    this.arr.push(Math.round(Math.random()*10))
  }


  

}
