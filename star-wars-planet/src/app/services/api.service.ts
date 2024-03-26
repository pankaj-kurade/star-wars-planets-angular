import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planet } from '../models/planet.model';
import { Resident } from '../models/resident.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }

  getPlanets(page: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/planets/?page=${page}`);
  }

  getResident(url: string): Observable<Resident> {
    return this.http.get<Resident>(url);
  }
}
