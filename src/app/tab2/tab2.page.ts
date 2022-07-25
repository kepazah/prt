import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

    feriados = [];
    ngOnInit() {
  
      this.obtenerFeriados();
      
    }
  
      constructor(private http: HttpClient){
  
  
  
      }
    //Conexión  Consola V1 Artesanal
    obtenerFeriados1() {
  
      fetch('https://apis.digital.gob.cl/fl/feriados/2022').then(dato=>{
        if (dato.ok){
          dato.json().then(listaFeriados=>{
       // console.log(listaFeriados);
       
          })
        }
      })
    }
  
    //Conexión  Consola V2 HttpClient
    obtenerFeriados(){
  
      this.http.get('https://apis.digital.gob.cl/fl/feriados/2022').subscribe((listadoFeriados: any)=>{
        
      listadoFeriados.map((auxFeriado: any)=>{
        
        let feriado: any = {
  
          nombre: auxFeriado.nombre,
          fecha: auxFeriado.fecha,
          irrenunciable: auxFeriado.irrenunciable,
          tipo: auxFeriado.tipo,
  
  
        }
        this.feriados.push(feriado);
        console.log(feriado);
      })
  
    })
  }
  }