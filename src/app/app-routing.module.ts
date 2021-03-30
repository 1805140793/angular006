import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { PaginaerrorComponent } from './paginaerror/paginaerror.component';
import { PipesComponent } from './pipes/pipes.component';
import { TitulosComponent } from './titulos/titulos.component';
import { AgregarusuariosComponent } from './usuarios/agregarusuarios/agregarusuarios.component';
import { EditarusuariosComponent } from './usuarios/editarusuarios/editarusuarios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
//** significa q es una pagina q no hay, es decir cuando el usuario ingresa una ruta erronea
// entonces defino por predeterminado que se dirija a una pagina de error
const routes: Routes = [
  {path:'',component: TitulosComponent},
  {path:'pipes',component: PipesComponent},
  {path:'ejemplo',component: EjemploComponent},
  {path:'directivas',component: DirectivasComponent},

  //ruta padre o ruta principal
  {path:'usuarios',component: UsuariosComponent,
    //rutas hijas con atributo children
    children:[
      {path:'agregar',component: AgregarusuariosComponent},
      {path:'editar',component: EditarusuariosComponent},
    ]
  },
  {path:'articulo',component: ArticuloComponent},
  //rutas dinamicas   / (para parametros)
  //{path:'articulodetalle/:nombre/:precio',component: ArticuloDetalleComponent},

  // Pasar parametro de tipo objeto o interface (json)
  {path:'articulodetalle',component: ArticuloDetalleComponent},

  {path:'**',component: PaginaerrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
