import { Component } from '@angular/core';
import { AnimalPostComponent } from '../animal-post/animal-post.component';
import { AnimalReadComponent } from '../animal-read/animal-read.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-animal-home-page',
  imports: [AnimalPostComponent, AnimalReadComponent],
  templateUrl: './animal-home-page.component.html',
  styleUrl: './animal-home-page.component.scss'
})
export class AnimalHomePageComponent {

  constructor(private router: Router){}

  GoToHomePage(){
    this.router.navigate(['/']);
  }
}
