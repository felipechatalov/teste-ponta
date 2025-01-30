import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnimalHomePageComponent } from './paginas/animal-home-page/animal-home-page.component';
import { FarmHomePageComponent } from './paginas/farm/farm-home-page/farm-home-page.component';

export const routes: Routes = 
[
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },{
        path: 'animal',
        component: AnimalHomePageComponent,
        title: 'Animal Home Page'
    },{
        path: 'farm',
        component: FarmHomePageComponent,
        title: 'Farm Home Page'
    },
];
