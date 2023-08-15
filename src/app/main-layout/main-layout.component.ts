import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  pokemon : any [] = [];

  constructor(private dataService: DataService) { }

  generatePoke(): void {
    this.pokemon = []; 
    this.dataService.getPokemonsData().subscribe((data: any) => {
      this.pokemon.push(data);
    });
  }
}
