import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FarmApiService } from '../../servicos/farm-api.service';
import { HomePageButtonComponent } from '../../components/home-page-button/home-page-button.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-farm-page',
  imports: [FormsModule, ReactiveFormsModule, HomePageButtonComponent, NgFor, NgIf],
  templateUrl: './farm-page.component.html',
  styleUrl: './farm-page.component.scss'
})
export class FarmPageComponent {
  
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

  public farmList = [1];
  constructor(private farmApiService: FarmApiService){}

  CreateFarm(){
    console.log(this.formPost.value);

    let newFarm = {
      name: this.formPost.value.name,
    };

    this.farmApiService.post(newFarm).subscribe(
      (response) => {
        console.log(response);
        this.formPost.reset();
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
        this.formGetById.reset();
      },
      (error) => {
        console.log(error);
      });
  }

  GetAllFarms(){
    this.farmApiService.getAll().subscribe(
      (response) => {
        console.log(response);
        this.farmList = response;
      },
      (error) => {
        console.log(error);
      });
  }

  UpdateFarm(){

    if (this.formUpdate.value.id == null){
      return;
    }

    let newFarm = {
      name: this.formUpdate.value.name,
    };

    this.farmApiService.update(this.formUpdate.value.id, newFarm).subscribe(
      (response) => {
        console.log(response);
        this.formUpdate.reset();
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
