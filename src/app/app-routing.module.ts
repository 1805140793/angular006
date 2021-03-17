import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivasComponent } from './directivas/directivas.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { PaginaerrorComponent } from './paginaerror/paginaerror.component';
import { PipesComponent } from './pipes/pipes.component';
import { TitulosComponent } from './titulos/titulos.component';
//** significa q es una pagina q no hay, es decir cuando el usuario ingresa una ruta erronea
// entonces defino por predeterminado que se dirija a una pagina de error
const routes: Routes = [
  {path:'',component: TitulosComponent},
  {path:'pipes',component: PipesComponent},
  {path:'ejemplo',component: EjemploComponent},
  {path:'directivas',component: DirectivasComponent},
  {path:'**',component: PaginaerrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
