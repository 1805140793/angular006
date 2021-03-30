import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../models/articulo.interface';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css']
})
export class ArticuloDetalleComponent implements OnInit {

  // variables
   nombre?:string;
   precio?:number;

   //Recibo como parametro la interface u objeto
   //Aveces es necesario colocar el signo de admiracion
   //articulo?:Articulo;
   articulo!:Articulo;


  //inyeccion de dependencias
  constructor( private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    //recibir todos los parametros
    //console.log(this.ruta.snapshot.params.nombre);
    //this.nombre=this.ruta.snapshot.params.nombre;
    //this.precio = this.ruta.snapshot.params.precio;

    //recibir la interface con los parametros que estan en las propiedades
    /*
    console.log("Pasado al Detalle como una cadena: ",
          this.ruta.snapshot.params.articuloJSON);

    Convertir de String a JSON
    console.log("Pasado al Detalle como un objeto JSON: ",
          JSON.parse(this.ruta.snapshot.params.articuloJSON));*/

    this.articulo = JSON.parse(this.ruta.snapshot.params.articuloJSON);
  }

}
