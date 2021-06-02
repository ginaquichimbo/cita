import { Component, Input,EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-list-cita',
  templateUrl: './list-cita.component.html',
  styleUrls: ['./list-cita.component.css']
})
export class ListCitaComponent implements OnInit {

@Input() listadoCitas:any;
@Output() deleteCita = new  EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  eliminarCita(index:number){
    this.deleteCita.emit(index);

  }

}
