import { Component, OnInit } from '@angular/core';

import { Hero } from '../interfaces/Hero';
import { heroes } from '../mock-heroes';

@Component({
  selector: 'app-list-of-heroes',
  templateUrl: './list-of-heroes.component.html',
  styleUrls: ['./list-of-heroes.component.scss']
})
export class ListOfHeroesComponent implements OnInit {
  public flag: boolean = false;
  public heroName: string;
  choose(event) {
    let target = event.target;

    if (target.parentNode.className === "hero--items--block" || target.className === 'hero--items--block') {
      target.tagName === "SPAN" ? target = target.parentNode : null;
      this.flag = true;
      this.heroName = target.lastChild.textContent;
    }
    // } else {
    //   this.flag = false;
    //   this.heroName = '';
    // }
  }
  constructor() { }

  ngOnInit(): void {

  }
  public heroes: Hero[] = heroes.sort((a, b) => a.id - b.id);
} 
