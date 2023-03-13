import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HouseService } from '../services/house.service';
import { House } from '../models/house';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],
})
export class HouseComponent implements OnInit {
  house: House = {} as House;

  constructor(
    private route: ActivatedRoute,
    private houseService: HouseService
  ) {}

  ngOnInit() {
    // get the id from the url
    const routeParams = this.route.snapshot.paramMap;
    const houseIdFromRoute = Number(routeParams.get('houseId'));

    this.getHouseById(houseIdFromRoute);
  }

  getHouseById(id: number) {
    this.houseService.getHouseById(id).subscribe((a) => {
      console.log(a);
      this.house = a;
    });
  }
}
