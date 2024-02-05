import { Component, inject  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  herosService: HeroesService = inject(HeroesService);

  topHeroesList = this.herosService.getTopHeroesList();

  constructor(private router: Router){}

  navigateToHeroeDetails(heroId: number) {
    this.router.navigate([`/heroes/${heroId}`]);
  }
}
