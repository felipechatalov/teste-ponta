import { Component } from '@angular/core';
import { AnimalApiService } from '../../servicos/animal-api.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-animal-read',
  imports: [FormsModule, ReactiveFormsModule, NgFor],
  templateUrl: './animal-read.component.html',
  styleUrl: './animal-read.component.scss'
})
export class AnimalReadComponent {

  formGetAnimalById = new FormGroup({
    id: new FormControl(''),
  });


  constructor(private animalApiService: AnimalApiService) {}

  GetAllAnimals(){
    this.animalApiService.getAll().subscribe(
      (retorno) => {
        console.log(retorno);
      },
      (error) => {
        console.log(error);
      });
  }

  GetAnimalById(){

    if (this.formGetAnimalById.value.id == null){
      return;
    }

    this.animalApiService.getById(this.formGetAnimalById.value.id).subscribe(
      (retorno) => {
        console.log(retorno);
      },
      (error) => {
        console.log(error);
      });
  }

}
