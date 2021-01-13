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

  public desactivado:boolean = true;
  public tipo:string = 'submit';
  public estilo:string = 'btn btn-primary'
  public lbl1:string='Algo'
  public lbl2:string=''
  public lbl3:string=''
  public seleccion:string=''
  public seleccion2:string='Naruto'

  constructor() 
  {

  }

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
}
