import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) 
  {}

  //get pokemons data 
  getPokemonsData(){
    let randomId = Math.floor(Math.random() * 151) +1;
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${randomId}/?generation=1`)
  }
  
}
