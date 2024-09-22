import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.thedogapi.com/v1/breeds';
  constructor(private http:HttpClient) { }
  getDogDetails():Observable<any[]>{
  return this.http.get<any[]>(this.apiUrl)
}

}
