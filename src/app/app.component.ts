import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{


  ngOnInit() {

    this.obtenerFeriados2();
    
  }

    constructor(private http: HttpClient){



    }
  //Conexión  Consola V1 Artesanal
  obtenerFeriados() {

    fetch('https://apis.digital.gob.cl/fl/feriados/2022').then(dato=>{
      if (dato.ok){
        dato.json().then(listaFeriados=>{
      console.log(listaFeriados);
        })
      }
    })
  }

  //Conexión  Consola V2 HttpClient
  obtenerFeriados2(){

    this.http.get('https://apis.digital.gob.cl/fl/feriados/2022').subscribe(listadoFeriados=>{
      console.log(listadoFeriados);
    })

  }
  
}
