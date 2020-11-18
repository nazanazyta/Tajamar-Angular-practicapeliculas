import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Genero } from './../../models/genero';
import { PeliculaService } from './../../services/pelicula.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-peliculas',
  templateUrl: './menupeliculas.component.html'
})
export class MenuPeliculasComponent implements OnInit {
  public generos: Array<Genero>;
  @ViewChild("cajatitulo") cajatitulo: ElementRef;
  
  constructor(
    private _service: PeliculaService,
    private _router: Router
  ) { }

  navigateBusqueda() {
    var titulo = this.cajatitulo.nativeElement.value;
    this._router.navigate(["/busqueda", titulo]);
  }

  ngOnInit(): void {
    this._service.getGeneros().subscribe(response => {
      this.generos = response;
    }, error => {
      console.log(error);
    });
  }

}
