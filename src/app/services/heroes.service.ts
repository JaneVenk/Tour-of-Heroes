import { Injectable } from '@angular/core';
import { IHero } from '../models/ihero';
import { heroesData } from '../data/heroes.data';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() { }

  heroesList: IHero[] = heroesData;

  getHeroesList(): IHero[] {
    return this.heroesList;
  }

  getTopHeroesList(): IHero[] {
    return this.heroesList.filter((hero: IHero) => {
      return hero.top;
    });
  }

  getHeroById(id: number): IHero | undefined {
    return this.heroesList.find((hero: IHero) => { return hero.id === id });
  }

  updateHeroName(id: number, name: string): void {
    var hero: IHero | undefined = this.getHeroById(id);

    if (hero) {
      hero.name = name;
    }

  }

}
