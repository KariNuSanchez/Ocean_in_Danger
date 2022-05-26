import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Animal } from '../interfaces/animal.interface';
import { Noticia } from '../interfaces/noticia.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private _newsUrl:string = ('http://api.mediastack.com/v1/news?access_key=6be5e3b16f6d75eabd13434b03b9e1ad&categories=science&keywords=endangered marine')
  private _BaseUrl:string = environment.BaseUrl

  constructor(private http:HttpClient) { }

  getDatosNoticias(){
    return this.http.get<Noticia>(this._newsUrl).pipe(
      map(resp=>{
        return resp.data
      })
    )
  }

  getAnimales():Observable<Animal[]>{
    return this.http.get<Animal[]>(this._BaseUrl)
  }
 
  getAnimalName(termino:string):Observable<Animal[]>{
    return this.http.get<Animal[]>(`${this._BaseUrl}/name/${termino}`)
  }

}
