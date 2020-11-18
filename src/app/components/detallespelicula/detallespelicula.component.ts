import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PeliculaService } from './../../services/pelicula.service';
import { Pelicula } from './../../models/pelicula';

@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detallespelicula.component.html'
})
export class DetallesPeliculaComponent implements OnInit {
  public pelicula: Pelicula;

  constructor(
    private _service: PeliculaService,
    private _activeRoute: ActivatedRoute
  ) { }

  mostrarPelicula(idpelicula){
    this._service.getDetallesPelicula(idpelicula).subscribe(response => {
      this.pelicula = response;
      console.log(this.pelicula);
    });     
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(( params: Params ) => {
      this.mostrarPelicula(params.idpeli);
    });
  }

}
