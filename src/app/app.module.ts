import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitulosComponent } from './titulos/titulos.component';
import { PipesComponent } from './pipes/pipes.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { PaginaerrorComponent } from './paginaerror/paginaerror.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';

@NgModule({
  declarations: [
    AppComponent,
    TitulosComponent,
    PipesComponent,
    EjemploComponent,
    DirectivasComponent,
    PaginaerrorComponent,
    EncabezadoComponent,
    PiepaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
