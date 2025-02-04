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

  showFarm = {
    name: '',
    animals: [],
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

  public farmList: any[] = [];
  constructor(private farmApiService: FarmApiService){}

  CreateFarm(){
    if (this.formPost.value.name == '' || this.formPost.value.name == null) {
      alert('Nome não pode ser vazio');
      return;
    }

    let newFarm = {
      name: this.formPost.value.name,
    };

    this.farmApiService.post(newFarm).subscribe(
      (response) => {
        alert('Fazenda criada com sucesso');
        this.formPost.reset();
      },
      (error) => {
        alert('Erro ao criar fazenda');
      });
  }

  GetFarmById(){
    if (this.formGetById.value.id == '' || this.formGetById.value.id == null) {
      alert('Id não pode ser vazio');
      return;
    }

    this.farmApiService.getById(this.formGetById.value.id).subscribe(
      (response) => {
        this.showFarm = response;
        this.formGetById.reset();
      },
      (error) => {
        alert('Erro ao buscar fazenda');
      });
  }

  GetAllFarms(){
    this.farmApiService.getAll().subscribe(
      (response) => {
        this.farmList = response;
      },
      (error) => {
        alert('Erro ao buscar fazendas');
      });
  }

  UpdateFarm(){

    if (this.formUpdate.value.id == null){
      alert('Id não pode ser vazio');
      return;
    }

    let newFarm = {
      name: this.formUpdate.value.name,
    };

    this.farmApiService.update(this.formUpdate.value.id, newFarm).subscribe(
      (response) => {
        alert('Fazenda atualizada com sucesso');
        this.formUpdate.reset();
      },
      (error) => {
        alert('Erro ao atualizar fazenda');
      });
  }

  DeleteFarm(){
    if (this.formDelete.value.id == '' || this.formDelete.value.id == null) {
      alert('Id não pode ser vazio');
      return;
    }

    this.farmApiService.delete(this.formDelete.value.id).subscribe(
      (response) => {
        this.formDelete.reset();
        alert('Fazenda deletada com sucesso');
      },
      (error) => {
        alert('Erro ao deletar fazenda');
      });
  }
}
