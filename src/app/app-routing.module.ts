import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseComponent } from './house/house.component';
import { HousesComponent } from './houses/houses.component';
import { WandsComponent } from './components/wands/wands.component';
import { BookComponent } from './books/books.component';
import { CharactersComponent } from './characters/characters.component';
import { SpeciesComponent } from './species/species.component';

const routes: Routes = [
  { path: '', component: HousesComponent },
  { path: 'house/:houseId', component: HouseComponent },
  { path: 'wands', component: WandsComponent },
  { path: 'books', component: BookComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'species', component: SpeciesComponent },

  // { path: '', redirectTo: '/houses', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
