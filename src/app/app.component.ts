import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tour-of-heroes';

  constructor(private router: Router){}

  navigateToHeroes() {
    this.router.navigate(['/heroes']);
  }

  navigateToDashboard() {
    this.router.navigate(['/']);
  }
}
