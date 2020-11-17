import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Genero } from './../../models/genero';
import { PeliculaService } from './../../services/pelicula.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-peliculas',
  templateUrl: './menupeliculas.component.html'
})
export class MenuPeliculasComponent implements OnInit {
  public generos: Array<Genero>;
  public texto: string;
  @ViewChild("caja") caja: ElementRef;
  
  constructor(
    private _service: PeliculaService,
    private _activeRoute: ActivatedRoute,
    private _router: Router
  ) { }

  redirect(text){
    this._router.navigate(["/peliculas", text]);
  }

  mostrarBusqueda(){
    this.texto = this.caja.nativeElement.value;
    //REDIRECT A OTRO COMPONENTE, PORQUE LO ESTAMOS HACIENDO CON ROUTING
    //"['/peliculas/', texto]"
    this.redirect(this.texto);
  }

  ngOnInit(): void {
    this._service.getGeneros().subscribe(response => {
      this.generos = response;
    }, error => {
      console.log(error);
    });
  }

}
