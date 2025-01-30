import { Component } from '@angular/core';
import { FormGroup, FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { FarmApiService } from '../../../servicos/farm-api.service';

@Component({
  selector: 'app-farm-post',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './farm-post.component.html',
  styleUrl: './farm-post.component.scss'
})
export class FarmPostComponent {
  
  baseFarm = {
    name: '',
  }

  formPost = new FormGroup({
    name: new FormControl(''),
  });

  formGetById = new FormGroup({
    id: new FormControl(''),
  });

  formUpdate = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
  });

  formDelete = new FormGroup({
    id: new FormControl(''),
  });

  constructor(private farmApiService: FarmApiService) { }

  CreateFarm(){
    console.log(this.formPost.value);

    let novoAnimal = {
      name: this.formPost.value.name,
    };

    this.farmApiService.post(novoAnimal).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      });
  }

  GetFarmById(){
    console.log(this.formGetById.value);

    if (this.formGetById.value.id == '' || this.formGetById.value.id == null) {
      console.log('Id não pode ser vazio');
      return;
    }

    this.farmApiService.getById(this.formGetById.value.id).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      });
  }

  GetAllFarms(){
    this.farmApiService.getAll().subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      });
  }

  UpdateFarm(){

    if (this.formUpdate.value.id == null){
      return;
    }

    let novoFarm = {
      name: this.formUpdate.value.name,
    };

    this.farmApiService.update(this.formUpdate.value.id, novoFarm).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      });
  }

  DeleteFarm(){
    if (this.formDelete.value.id == '' || this.formDelete.value.id == null) {
      console.log('Id não pode ser vazio');
      return;
    }

    this.farmApiService.delete(this.formDelete.value.id).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      });
    }

}
