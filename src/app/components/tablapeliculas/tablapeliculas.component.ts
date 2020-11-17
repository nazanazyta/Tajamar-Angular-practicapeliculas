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
  public genero: string;
  public texto : string;

  constructor(
    private _service: PeliculaService,
    private _activeRoute: ActivatedRoute
  ) { }

  mostrarPeliculas(idGen, genero) {
    this._service.getPeliculasGenero(idGen).subscribe(response => {
      this.peliculas = response;
    });
    this.genero = genero;
  }

  verPeliculas(tit) {
    this._service.getPeliculas(tit).subscribe(response => {
      this.peliculas = response;
    });
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(( params: Params ) => {
      if(params.idgenero != null){
        var idGen = params.idgenero;
        var genero = params.genero;
        this.mostrarPeliculas(idGen, genero);
      }else{
        this.texto = params.texto;
        this.verPeliculas(this.texto);
      }
    });
  }

}
