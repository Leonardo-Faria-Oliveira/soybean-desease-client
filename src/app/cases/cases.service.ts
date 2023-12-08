import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CasesService {

  url = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

;
 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

  getDataFilled(id: number | string): Observable<any> {
    return this.httpClient.get<any>(this.url + '/desease/get/'+ id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getCases(id: number | string): Observable<any> {
    return this.httpClient.get<any>(this.url + '/desease/'+ id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 



}
