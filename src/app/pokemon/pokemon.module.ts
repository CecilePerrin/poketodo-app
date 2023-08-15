import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';



@NgModule({
  declarations: [
    PokedexComponent,
    PokemonCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
