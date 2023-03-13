import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseComponent } from './house/house.component';
import { HousesComponent } from './houses/houses.component';

const routes: Routes = [
  { path: '', component: HousesComponent },
  { path: 'house/:houseId', component: HouseComponent },

  // { path: '', redirectTo: '/houses', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}