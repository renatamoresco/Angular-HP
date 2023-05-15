import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wand } from '../../models/wand';
import { WandService } from '../../services/wands.service';

@Component({
  selector: 'app-wands',
  templateUrl: './wands.component.html',
  styleUrls: ['./wands.component.css'],
})
export class WandsComponent implements OnInit {
  wands: Wand[] = [];

  constructor(
    private route: ActivatedRoute,
    private wandService: WandService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const wandIdFromRoute = Number(routeParams.get('wandId'));
    this.getWands();
  }

  getWands(): void {
    this.wandService.getWands().subscribe((wands) => (this.wands = wands));
  }
}
