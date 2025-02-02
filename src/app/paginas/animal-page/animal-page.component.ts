import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnimalApiService } from '../../servicos/animal-api.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-animalpage',
  imports: [FormsModule, ReactiveFormsModule, NgFor],
  templateUrl: './animal-page.component.html',
  styleUrl: './animal-page.component.scss'
})
export class AnimalPageComponent {
  inputAnimal = {
    name: '',
    tag: '',
    farmId: '',
  }

  formPost = new FormGroup({
    name: new FormControl(''),
    tag: new FormControl(''),
    farmId: new FormControl(''),
  });

  formUpdate = new FormGroup({
    id: new FormControl(''),
    farmId: new FormControl(''),
    name: new FormControl(''),
    tag: new FormControl(''),
  });

  formDelete = new FormGroup({
    id: new FormControl(''),
  });

  private animalList: any[] = [];
  formPostBatch = new FormGroup({
    name: new FormControl(''),
    tag: new FormControl(''),
    farmId: new FormControl(''),
  });

  formGetAnimalById = new FormGroup({
    id: new FormControl(''),
  });


  public animalListLength = 0;

  constructor(private router: Router,
              private animalApiService: AnimalApiService){}

  GoToHomePage(){
    this.router.navigate(['/']);
  }

  CadastrarAnimal(){
    console.log(this.formPost.value);

    let novoAnimal = {
      farmId: this.formPost.value.farmId,
      name: this.formPost.value.name,
      tag: this.formPost.value.tag
    };

    this.animalApiService.post(novoAnimal).subscribe(
      (retorno) => {
        console.log(retorno);
      },
      (error) => {
        console.log(error);
      });
  }

  UpdateAnimal(){

    if (this.formUpdate.value.id == null){
      return;
    }

    let novoAnimal = {
      farmId: this.formUpdate.value.farmId,
      name: this.formUpdate.value.name,
      tag: this.formUpdate.value.tag
    };

    this.animalApiService.update(this.formUpdate.value.id, novoAnimal).subscribe(
      (retorno) => {
        console.log(retorno);
      },
      (error) => {
        console.log(error);
      });
  }

  DeleteAnimal(){

    if (this.formDelete.value.id == null){
      return;
    }

    this.animalApiService.delete(this.formDelete.value.id).subscribe(
      (retorno) => {
        console.log(retorno);
      },
      (error) => {
        console.log(error);
      });
  }


  AddToBatch(){

    let newAnimal = {
      name: this.formPostBatch.value.name,
      tag: this.formPostBatch.value.tag
    };

    this.animalList.push(newAnimal);
    this.animalListLength = this.animalList.length;
  }

  PostBatch(){
      
    let animalBatch = {
      animals: this.animalList,
      farmId: this.formPostBatch.value.farmId
    };

    this.animalApiService.postBatch(animalBatch).subscribe(
      (retorno) => {
        console.log(retorno);
      },
      (error) => {
        console.log(error);
      });
  }

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
