import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnimalPageComponent } from './paginas/animal-page/animal-page.component';
import { FarmPageComponent } from './paginas/farm-page/farm-page.component';

export const routes: Routes = 
[
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },{
        path: 'animal',
        component: AnimalPageComponent,
        title: 'Animal Home Page'
    },{
        path: 'farm',
        component: FarmPageComponent,
        title: 'Farm Home Page'
    },
];
