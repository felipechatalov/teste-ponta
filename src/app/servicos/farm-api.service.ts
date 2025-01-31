import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmApiService {

  BASE_URL = 'http://localhost:5051/api/farm/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.BASE_URL);
  }

  getById(id: string): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/${id}`);
  }

  post(data: any): Observable<any> {
    return this.httpClient.post(this.BASE_URL, data);
  }

  update(id: string, data: any): Observable<any> {
    return this.httpClient.put(`${this.BASE_URL}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.httpClient.delete(`${this.BASE_URL}/${id}`);
  }

}
