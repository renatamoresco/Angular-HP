import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Wand } from '../models/wand';

@Injectable({
  providedIn: 'root',
})
export class WandService {
  url = 'https://legacy--api.herokuapp.com/api/v1/';

  constructor(private httpClient: HttpClient) {}

  getWands(): Observable<Wand[]> {
    return this.httpClient.get<Wand[]>(this.url + '/wands');
  }

  //   getHouses(): Observable<House[]> {
  //     return this.httpClient
  //       .get<House[]>(this.url + '/houses')
  //       .pipe(retry(2), catchError(this.handleError));
  //   }
}
