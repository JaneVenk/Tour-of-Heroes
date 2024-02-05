import { Component, Input, inject } from '@angular/core';
import { IHero } from '../../models/ihero';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeroesService } from '../../services/heroes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  applyForm = new FormGroup({
    heroName: new FormControl("", [Validators.required, Validators.minLength(3)])
  });

  herosService: HeroesService = inject(HeroesService);
  currentHero: IHero | undefined;
  heroId: number = -1;
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private location: Location){
    this.heroId = Number(this.route.snapshot.params['id']);
    this.currentHero = this.herosService.getHeroById(this.heroId);
    this.applyForm.patchValue({
      heroName: this.currentHero?.name || ''
    });
  }

  get heroNameControl() {
    return this.applyForm.get('heroName') as FormControl;
  }

  updateHeroName(){
    if(this.applyForm.valid){
    this.herosService.updateHeroName(this.heroId, this.applyForm.value.heroName ?? '');
    }
  }

  goBack(){
    this.location.back();
  }
}
