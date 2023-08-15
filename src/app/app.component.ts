import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  pokemon : any [] = [];
  constructor(private dataService: DataService) { }

  generatePoke(): void {
    this.pokemon = []; 
    this.dataService.getPokemonsData().subscribe((data: any) => {
      this.pokemon.push(data);
      console.log(this.pokemon)
    });
  }
}
