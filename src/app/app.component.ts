import { Component, OnInit } from '@angular/core';
import { House } from './models/house';
import { HouseService } from './services/house.service';
import { ActivatedRoute } from '@angular/router';
import { WandService } from './services/wands.service';
import { Wand } from './models/wand';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  houses: House[] = [];
  house: House = {} as House;
  title = 'angular-hp';
}
