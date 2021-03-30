import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../models/articulo.interface';
@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  //generico
  articulos: Array<Articulo> = new Array<Articulo>();

  //inyeccion de dependencias con la clase: Router
  constructor(private ruta:Router) { }

  //en eeste envento estoy inicializando los datos antes que se muestre en pantalla
  ngOnInit(): void {
    this.articulos.push(
      {//Primer Dato del tipo Articulo (objeto)
      nombre:"PC con Windows 10",
      descripcion:"Marca Lenovo",
      precio: 900,
      stock: 10,
      precioMayorista: 780,
      },
      {//Segundo Dato del tipo Articulo (objeto)
      nombre:"Mac Book Pro",
      descripcion:"Laptop con pantalla retina de Apple",
      precio: 2000,
      stock: 100,
      precioMayorista: 1880,
      },
      {//Tercer Dato del tipo Articulo (objeto)
      nombre:"Tablet de 10 pulgadas",
      descripcion:"Marca Samsung",
      precio: 400,
      stock: 46,
      precioMayorista: 250,
      },
      {//
      nombre:"PC Gaming",
      descripcion:"Marca Asus",
      precio: 1480,
      stock: 25,
      precioMayorista: 1200,
      },
      {//
      nombre:"Tarjeta Grafica GeForce 2060",
      descripcion:"Marca Nvidia",
      precio: 250,
      stock: 250,
      precioMayorista: 150,
      },
    );
  }

  pasarParametro(item: Articulo){
    console.log(item);

    //convertir el parametro "item" de tipo "Articulo" que es un objeto "JSON" a string
    //nombreArgumento: articuloJSON
    //transformo el tipo JSON a un string con el metodo stringify
    //con el metodo parse transformo de string a JSON
    this.ruta.navigate(['articulodetalle',
    {articuloJSON: JSON.stringify(item)}]);
  }
}
