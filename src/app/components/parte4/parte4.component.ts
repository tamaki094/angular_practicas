import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parte4',
  templateUrl: './parte4.component.html',
  styleUrls: [
    './parte4.component.sass', 
    '/node_modules/bootstrap/dist/css/bootstrap.min.css'
  ]
})
export class Parte4Component implements OnInit 
{

  constructor() { }

  ngOnInit(): void 
  {

  }

  funcionCick()
  {

  }

  funcionDblCick()
  {

  }

  log(evento)
  {
    console.log(evento)
  }

  desactivado = true
  tipo = 'submit'
  estilo = 'btn btn-primary'
  lbl1:string='Algo'
  lbl12:string=''
  lbl13:string=''
  seleccion:string=''
  seleccion2:string='Naruto'
}
