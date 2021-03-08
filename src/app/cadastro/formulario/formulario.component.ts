import { Campos } from './../shared/campos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  campos: Campos;
  constructor() { }

  ngOnInit() {
    this.campos = new Campos;

  }

  onSubmit(){
    console.log(this.campos);
    this.campos = new Campos;
  }

}








