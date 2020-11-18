import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PeliculaService } from './../../services/pelicula.service';
import { Pelicula } from './../../models/pelicula';

@Component({
  selector: 'app-tabla-peliculas',
  templateUrl: './tablapeliculas.component.html'
})
export class TablaPeliculasComponent implements OnInit {
  public peliculas: Array<Pelicula>;
  // public texto : string;

  constructor(
    private _service: PeliculaService,
    private _activeRoute: ActivatedRoute
  ) { }

  mostrarPeliculas(idGen) {
    this._service.getPeliculasGenero(idGen).subscribe(response => {
      this.peliculas = response;
    });
  }

  verPeliculas() {
    this._service.getPeliculas().subscribe(response => {
      this.peliculas = response;
    });
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(( params: Params ) => {
      if(params.idgenero != null){
        this.mostrarPeliculas(params.idgenero);
      }else{
        this.verPeliculas();
      }
    });
  }

}
