import { Component } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  pokemon : any [] = [];
  pokemonList : any[] = [];

  constructor(private dataService: DataService) { }

  getAllPokemon(): void {
    this.pokemonList = [];
    this.dataService.getAllPokemonsData().subscribe((data: any[]) => {
      this.pokemonList = data; 
    });
  }

  generatePoke(): void {
    this.pokemon = []; 
    this.dataService.getOnePokemonsData().subscribe((data: any) => {
      this.pokemon.push(data);
    });
  }
}
