import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesPeliculaComponent } from './components/detallespelicula/detallespelicula.component';
import { TablaPeliculasComponent } from './components/tablapeliculas/tablapeliculas.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

const appRoutes: Routes = [
    { path: "", component: TablaPeliculasComponent }
    , { path: "peliculas/:idgenero/:genero", component: TablaPeliculasComponent }
    , { path: "detallespelicula/:idpeli", component: DetallesPeliculaComponent }
    , { path: "peliculas/:texto", component: TablaPeliculasComponent }
    , { path: "busqueda/:titulo", component: BusquedaComponent }
];

export const appRoutingProvider: any [] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);