import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnimalApiService } from '../../servicos/animal-api.service';
import { NgFor, NgIf } from '@angular/common';
import { HomePageButtonComponent } from '../../components/home-page-button/home-page-button.component';


@Component({
  selector: 'app-animalpage',
  imports: [FormsModule, ReactiveFormsModule, NgFor, HomePageButtonComponent, NgIf],
  templateUrl: './animal-page.component.html',
  styleUrl: './animal-page.component.scss'
})
export class AnimalPageComponent {
  animalObj = {
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

  formPostBatch = new FormGroup({
    name: new FormControl(''),
    tag: new FormControl(''),
    farmId: new FormControl(''),
  });

  formGetAnimalById = new FormGroup({
    id: new FormControl(''),
  });


  public animalBatchListLength = 0;
  public animalBatchList: any[] = [];
  public animalList: any[] = [];

  public showAnimal = {
    name: '',
    tag: '',
    farmId: '',
  }

  constructor(private animalApiService: AnimalApiService){}



  CadastrarAnimal(){
    console.log(this.formPost.value);

    let newAnimal = {
      farmId: this.formPost.value.farmId,
      name: this.formPost.value.name,
      tag: this.formPost.value.tag
    };

    this.animalApiService.post(newAnimal).subscribe(
      (retorno) => {
        console.log(retorno);
        this.formPost.reset();
      },
      (error) => {
        console.log(error);
      });
  }

  UpdateAnimal(){

    if (this.formUpdate.value.id == null){
      return;
    }

    let newAnimal = {
      farmId: this.formUpdate.value.farmId,
      name: this.formUpdate.value.name,
      tag: this.formUpdate.value.tag
    };

    this.animalApiService.update(this.formUpdate.value.id, newAnimal).subscribe(
      (retorno) => {
        console.log(retorno);
        this.formUpdate.reset();
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
        this.formDelete.reset();
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

    this.animalBatchList.push(newAnimal);
    this.animalBatchListLength = this.animalBatchList.length;
    this.formPostBatch.reset();
  }

  PostBatch(){
      
    let animalBatch = {
      animals: this.animalBatchList,
      farmId: this.formPostBatch.value.farmId
    };

    this.animalApiService.postBatch(animalBatch).subscribe(
      (retorno) => {
        console.log(retorno);
        this.animalBatchList = [];
        this.animalBatchListLength = 0;
        this.formPostBatch.reset();
      },
      (error) => {
        console.log(error);
      });
  }

  GetAllAnimals(){
    this.animalApiService.getAll().subscribe(
      (retorno) => {
        console.log(retorno);
        this.animalList = retorno;
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
        this.showAnimal = retorno;
        this.formGetAnimalById.reset();
      },
      (error) => {
        console.log(error);
        this.showAnimal = {
          name: '',
          tag: '',
          farmId: '',
        };
      });
  }
}
