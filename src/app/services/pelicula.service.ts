import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class PeliculaService {
    private url: string;

    constructor(private _http: HttpClient) {
        this.url = Global.urlpeliculas;
    }

    getGeneros(): Observable<any> {
        var request = "api/generos";
        return this._http.get(this.url + request);
    }

    getPeliculasGenero(idgenero): Observable<any> {
        var request = "api/peliculasgenero/" + idgenero;
        return this._http.get(this.url + request);
    }

    getDetallesPelicula(idpeli): Observable<any> {
        var request = "api/peliculas?idpeli=" + idpeli;
        return this._http.get(this.url + request);
    }

    getPeliculas(titulo): Observable<any> {
        var request = "api/peliculastitulo/" + titulo;
        return this._http.get(this.url + request);
    }
}