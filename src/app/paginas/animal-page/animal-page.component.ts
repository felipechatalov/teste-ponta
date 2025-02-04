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
    if (this.formPost.value.name == '' || this.formPost.value.name == null
      || this.formPost.value.tag == '' || this.formPost.value.tag == null
      || this.formPost.value.farmId == '' || this.formPost.value.farmId == null) {
      alert('Nome ou tag ou id não pode ser vazio');
      return;
    }

    let newAnimal = {
      farmId: this.formPost.value.farmId,
      name: this.formPost.value.name,
      tag: this.formPost.value.tag
    };

    this.animalApiService.post(newAnimal).subscribe(
      (retorno) => {
        alert('Animal cadastrado com sucesso');
        this.formPost.reset();
      },
      (error) => {
        alert('Erro ao cadastrar animal');
      });
  }

  UpdateAnimal(){

    if (this.formUpdate.value.id == null || this.formUpdate.value.id == ''
      || this.formUpdate.value.name == null || this.formUpdate.value.name == ''
      || this.formUpdate.value.tag == null || this.formUpdate.value.tag == ''){
      alert('Nome ou tag ou id não pode ser vazio');
      return;
    }

    let newAnimal = {
      farmId: this.formUpdate.value.farmId,
      name: this.formUpdate.value.name,
      tag: this.formUpdate.value.tag
    };

    this.animalApiService.update(this.formUpdate.value.id, newAnimal).subscribe(
      (retorno) => {
        alert('Animal atualizado com sucesso');
        this.formUpdate.reset();
      },
      (error) => {
        alert('Erro ao atualizar animal');
      });
  }

  DeleteAnimal(){

    if (this.formDelete.value.id == null){
      alert('Id não pode ser vazio');
      return;
    }

    this.animalApiService.delete(this.formDelete.value.id).subscribe(
      (retorno) => {
        alert('Animal deletado com sucesso');
        this.formDelete.reset();
      },
      (error) => {
        alert('Erro ao deletar animal');
      });
  }


  AddToBatch(){
    if (this.formPostBatch.value.name == '' || this.formPostBatch.value.name == null
      || this.formPostBatch.value.tag == '' || this.formPostBatch.value.tag == null) {
      alert('Nome ou tag não pode ser vazio');
      return;
    }
    let newAnimal = {
      name: this.formPostBatch.value.name,
      tag: this.formPostBatch.value.tag
    };

    this.animalBatchList.push(newAnimal);
    this.animalBatchListLength = this.animalBatchList.length;
    this.formPostBatch.reset();
  }

  PostBatch(){
      
    if (this.formPostBatch.value.farmId == ''){
      alert('Id da fazenda não pode ser vazio');
      return;
    }

    let animalBatch = {
      animals: this.animalBatchList,
      farmId: this.formPostBatch.value.farmId
    };

    this.animalApiService.postBatch(animalBatch).subscribe(
      (retorno) => {
        this.animalBatchList = [];
        this.animalBatchListLength = 0;
        this.formPostBatch.reset();
      },
      (error) => {
        alert('Erro ao cadastrar animal')
      });
  }

  GetAllAnimals(){
    this.animalApiService.getAll().subscribe(
      (retorno) => {
        this.animalList = retorno;
      },
      (error) => {
        alert('Erro ao buscar animais');        
      });
  }

  GetAnimalById(){

    if (this.formGetAnimalById.value.id == null || this.formGetAnimalById.value.id == ''){
      alert('Id não pode ser vazio');
      return;
    }

    this.animalApiService.getById(this.formGetAnimalById.value.id).subscribe(
      (retorno) => {
        this.showAnimal = retorno;
        this.formGetAnimalById.reset();
      },
      (error) => {
        alert('Erro ao buscar animal');
        this.showAnimal = {
          name: '',
          tag: '',
          farmId: '',
        };
      });
  }
}
