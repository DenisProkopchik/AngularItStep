import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../interfaces/Hero';
import { heroes } from '../mock-heroes';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public hero: Hero;
  public heroes: Hero[] = heroes.sort((a, b) => a.id - b.id);

  constructor(
    private route: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('hero.id') - 1;
    this.hero = heroes[id];
  }

  goToBackPage() {
    this._location.back();
  }
}
