import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesPeliculaComponent } from './components/detallespelicula/detallespelicula.component';
import { MenuPeliculasComponent } from './components/menupeliculas/menupeliculas.component';
import { TablaPeliculasComponent } from './components/tablapeliculas/tablapeliculas.component';

const appRoutes: Routes = [
    { path: "peliculas/:idgenero/:genero", component: TablaPeliculasComponent }
    , { path: "detallespelicula/:idpeli", component: DetallesPeliculaComponent }
    , { path: "peliculas/:texto", component: TablaPeliculasComponent }
];

export const appRoutingProvider: any [] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);