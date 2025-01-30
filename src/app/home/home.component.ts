import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router){}

  GoToAnimalPage(){
    this.router.navigate(['/animal']);
  }

  GoToFarmPage(){
    this.router.navigate(['/farm']);
  }
}
