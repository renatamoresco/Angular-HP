import { Component, OnInit } from '@angular/core';
import { HouseService } from '../services/house.service';
import { House } from '../models/house';
import { ActivatedRoute } from '@angular/router';
import { Wands } from '../models/wands';

@Component({
  selector: 'app-root',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
})
export class HousesComponent implements OnInit {
  houses: House[] = [];

  title = 'angular-hp';

  constructor(private houseService: HouseService) {}

  ngOnInit() {
    this.getHouses();
  }

  getHouses() {
    this.houseService.getHouses().subscribe((houses: House[]) => {
      this.houses = houses;
    });
  }
}
