import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Specie } from '../models/specie';
import { SpeciesService } from '../services/species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css'],
})
export class SpeciesComponent {
  species: Specie[] = [];

  constructor(
    private route: ActivatedRoute,
    private speciesService: SpeciesService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const speciesIdFromRoute = Number(routeParams.get('speciesId'));
    this.getSpecies();
  }

  getSpecies(): void {
    this.speciesService
      .getSpecies()
      .subscribe((species) => (this.species = species));
  }
}
