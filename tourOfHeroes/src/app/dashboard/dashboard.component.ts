import { Component, OnInit } from '@angular/core';

import { Hero } from '../interfaces/Hero';
import { heroes } from '../mock-heroes';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public heroes: Hero[] = heroes.sort((a, b) => b.power - a.power).slice(0, 6);

  constructor() { }

  ngOnInit(): void {
    console.log(this.heroes)
  }

}
