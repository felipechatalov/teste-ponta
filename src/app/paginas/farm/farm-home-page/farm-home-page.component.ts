import { Component } from '@angular/core';
import { FarmPostComponent } from '../farm-post/farm-post.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farm-home-page',
  imports: [FarmPostComponent],
  templateUrl: './farm-home-page.component.html',
  styleUrl: './farm-home-page.component.scss'
})
export class FarmHomePageComponent {

  constructor(private router: Router){}

  GoToHomePage(){
    this.router.navigate(['/']);
  }
}
