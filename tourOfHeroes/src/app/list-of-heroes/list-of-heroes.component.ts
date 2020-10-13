import { Component, OnInit } from '@angular/core';

import { Hero } from '../interfaces/Hero';
import { heroes } from '../mock-heroes';

@Component({
  selector: 'app-list-of-heroes',
  templateUrl: './list-of-heroes.component.html',
  styleUrls: ['./list-of-heroes.component.scss']
})
export class ListOfHeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  public heroes: Hero[] = heroes.sort((a, b) => a.id - b.id);
} 
