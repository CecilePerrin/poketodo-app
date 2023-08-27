import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getOnePokemonsData(): Observable<any> {
    let randomId = Math.floor(Math.random() * 151) + 1;
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${randomId}/?generation=1`);
  }

  getAllPokemonsData(): Observable<any[]> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/?generation=1`);
  }
}
