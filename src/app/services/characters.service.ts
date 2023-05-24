import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Character } from '../models/character';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  url = 'https://legacy--api.herokuapp.com/api/v1';

  constructor(private httpClient: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.url + '/characters');
  }
}
