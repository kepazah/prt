import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{


  ngOnInit() {

    this.obtenerFeriados();
    
  }


  obtenerFeriados() {

    fetch('https://apis.digital.gob.cl/fl/feriados/2022').then(dato=>{
      if (dato.ok){
        dato.json().then(listaFeriados=>{
      console.log(listaFeriados);
        })
      }
    })
  }


  
}
