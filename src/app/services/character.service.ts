import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Character } from '../models';//importamos el modelo de character
import { characterAdapter } from '../adapters';
//diferencia entre promise y observable
//promete que algo va a suceder aunque termine bien o mal
//observable es un canal de comunicacion, se observa el contenido que pasa por el canal.


@Injectable({
  providedIn: 'root'//se inyecta a nivel de aplicacion, o sea una sola instancia
})
export class CharacterService {
  private apiUrl = 'https://rickandmortyapi.com/api/character'; //el privado se usa solo dentro de esta clase
  private http = inject(HttpClient);// esto un modulo que brinda funcionalidades para hacer peticiones al backend

  getCharacters(): Observable<Character[]> {//el character es el tipo y es una interface siempre en singular porque se representar una entidad
    return this.http.get<Character[]>(this.apiUrl)
      .pipe(map((characters) => characterAdapter(characters)));//pipe es un metodo que se usa para transformar la data que viene del backend  y map es un metodo que se usa para transformar la data que viene del backend      
  } // es una buena practica poner el tipo de dato que se va a retornar, como ese Observable para controlar que este metodo haga lo que queremos.

  updateCharacter(character: Character): Observable<Character> {
    return this.http.put<Character>(`${this.apiUrl}`, character);
  }

  deleteCharacter(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
