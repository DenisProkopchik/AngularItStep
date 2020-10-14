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
  public yourHero;
  public heroes: Hero[] = heroes.sort((a, b) => a.id - b.id);

  choose(event) {
    let target = event.target;

    if (target.parentNode.className === "hero--items--block" || target.className === 'hero--items--block') {
      target.tagName === "SPAN" ? target = target.parentNode : null;
      this.flag = true;
      this.yourHero = this.heroes.find(item => item.id === Number(target.firstChild.textContent));
    } else if (target.className === 'hero--choosed--remove') {
      this.flag = !this.flag;
      this.yourHero = undefined;
    }
  }

  constructor() { }

  ngOnInit(): void {

  }
} 
