import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Specie } from '../models/specie';

@Injectable({ providedIn: 'root' })
export class SpeciesService {
  url = 'https://legacy--api.herokuapp.com/api/v1';

  constructor(private httpClient: HttpClient) {}

  getSpecies(): Observable<Specie[]> {
    return this.httpClient.get<Specie[]>(this.url + '/species');
  }
}
