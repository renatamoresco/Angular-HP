import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wands } from '../models/wands';
import { WandService } from '../services/wands.service';

@Component({
  selector: 'app-wands',
  templateUrl: './wands.component.html',
  styleUrls: ['./wands.component.css'],
})
export class WandsComponent implements OnInit {
  wands: Wands = {} as Wands;

  constructor(
    private route: ActivatedRoute,
    private wandService: WandService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const wandIdFromRoute = Number(routeParams.get('wandId'));

    this.getWandById(wandIdFromRoute);
  }

  getWandById(id: number) {
    this.wandService.getWandById(id).subscribe((a) => {
      console.log(a);
      this.wands = a;
    });
  }
}
