import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-create-cita',
  templateUrl: './create-cita.component.html',
  styleUrls: ['./create-cita.component.css']
})
export class CreateCitaComponent implements OnInit {
 nombre='';
 fecha= '';
 hora='';
 descripcion='';
 formularioIncorrecto=false;

  constructor() { }

  ngOnInit(): void {
  }
  @Output() nuevaCita=new EventEmitter<any>(); //Agregamos estas directivas para eviar los componentes al componente padre
  agregarCita(){
    if(this.nombre==''|| this.fecha==''|| this.hora=='' || this.descripcion==''){
    
        this.formularioIncorrecto=true;
        return ;
    }
    this.formularioIncorrecto=false;
    ///Creamos al objeto para enviarlo al padre
    const CITA={
      nombre:this.nombre,
      fecha:this.fecha,
      hora:this.hora,
      descripcion:this.descripcion
    }
    console.log(CITA);
    this.nuevaCita.emit(CITA); //Envia al componente padre este nuevo registro
    this.resetCampos();
  }
  resetCampos(){
    this.nombre='';
    this.hora='';
    this.fecha='';
    this.descripcion='';
  }

}
