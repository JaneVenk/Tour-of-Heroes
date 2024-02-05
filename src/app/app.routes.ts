import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        title: 'Dashboard'
    },
    {
        path: 'heroes',
        component: HeroesComponent,
        title: 'Heroes'
    },
    {
        path: 'heroes/:id',
        component: DetailsComponent,
        title: 'Hero details'
    }
];
