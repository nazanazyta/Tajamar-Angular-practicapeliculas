import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PeliculaService } from './../../services/pelicula.service';
import { Pelicula } from './../../models/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {
  public peliculas: Array<Pelicula>;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _service: PeliculaService
  ) { }

  cargarPeliculas(titulo) {
    this._service.getPeliculasBusqueda(titulo).subscribe(response => {
      this.peliculas = response;
    })
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(( params: Params ) => {
      this.cargarPeliculas(params.titulo);
    });
  }

}
