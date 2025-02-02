import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page-button',
  imports: [],
  templateUrl: './home-page-button.component.html',
  styleUrl: './home-page-button.component.scss'
})
export class HomePageButtonComponent {
  
  constructor(private router: Router){}

  GoToHomePage(){
    this.router.navigate(['/']);
  }
}
