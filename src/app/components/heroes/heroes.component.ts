import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  herosService: HeroesService = inject(HeroesService);
  heroesList = this.herosService.getHeroesList();

  constructor(private router: Router){}

  navigateToHeroeDetails(heroId: number) {
    this.router.navigate([`/heroes/${heroId}`]);
  }
}
