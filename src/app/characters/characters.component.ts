import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../models/character';
import { CharacterService } from '../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent {
  characters: Character[] = [];

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const characterIdFromRoute = Number(routeParams.get('characterId'));
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService
      .getCharacters()
      .subscribe((characters) => (this.characters = characters));
  }
}
