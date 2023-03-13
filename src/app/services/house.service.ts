import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { House } from '../models/house';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  url = 'https://legacy--api.herokuapp.com/api/v1/';

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getHouses(): Observable<House[]> {
    return this.httpClient
      .get<House[]>(this.url + '/houses')
      .pipe(retry(2), catchError(this.handleError));
  }

  getHouseById(id: number): Observable<House> {
    return this.httpClient
      .get<House>(this.url + '/houses/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
