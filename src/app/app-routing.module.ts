import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './pokemon/pokedex/pokedex.component';
import { PokemonCardComponent } from './pokemon/pokemon-card/pokemon-card.component';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  { path: 'main-layout', component: MainLayoutComponent},
  { path: 'pokedex', component: PokedexComponent },
  { path: 'pokemon-card/:id', component: PokemonCardComponent},
  { path: '',   redirectTo: '/main-layout', pathMatch: 'full' },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
