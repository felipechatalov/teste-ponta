import { Component } from '@angular/core';
import { FormGroup, FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AnimalApiService } from '../../servicos/animal-api.service';

@Component({
  selector: 'app-animal-post',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './animal-post.component.html',
  styleUrl: './animal-post.component.scss'
})
export class AnimalPostComponent {
  
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

  public animalListLength = 0;

  constructor(private animalApiService: AnimalApiService) { }

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

}

