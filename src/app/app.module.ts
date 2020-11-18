import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProvider } from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuPeliculasComponent } from './components/menupeliculas/menupeliculas.component';
import { TablaPeliculasComponent } from './components/tablapeliculas/tablapeliculas.component';
import { PeliculaService } from './services/pelicula.service';
import { DetallesPeliculaComponent } from './components/detallespelicula/detallespelicula.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPeliculasComponent,
    TablaPeliculasComponent,
    DetallesPeliculaComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule
    , HttpClientModule
    , routing
    , FormsModule
  ],
  providers: [
    PeliculaService
    , appRoutingProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
