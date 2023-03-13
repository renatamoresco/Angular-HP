import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Wands } from '../models/wands';

@Injectable({
  providedIn: 'root',
})
export class WandService {
  url = 'https://legacy--api.herokuapp.com/api/v1/';

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getWands(): Observable<Wands[]> {
    return this.httpClient
      .get<Wands[]>(this.url + '/wands')
      .pipe(retry(2), catchError(this.handleError));
  }

  getWandById(id: number): Observable<Wands> {
    return this.httpClient
      .get<Wands>(this.url + '/wands/' + id)
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
