import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  // pokemonId: number;
  pokemonDetail: any;

  constructor(private route:ActivatedRoute, private dataService: DataService){
}
 ngOnInit(): void {
  // this.route.params.subscribe(params => {
  //   this.pokemonId = +params['id'];
  //   this.pokemonDetail = this.dataService.getPokemonsData(this.pokemonId);
  // });
 }
}
