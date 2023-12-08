import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Form } from './form';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  url = 'http://localhost:3000'; // api rest fake

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
 
  
  
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

  saveForm(form: Form): Observable<Form> {
    return this.httpClient.post<Form>(this.url, JSON.stringify(form), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}
