import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SelectedCaseService {

  url = 'http://localhost:3000';

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
  

  getCase(id: number | string): Observable<any> {
    return this.httpClient.get<any>(this.url + '/desease/get/'+ id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getCaseByName(deseaseName: string): Observable<any> {
    return this.httpClient.get<any>(this.url + '/desease/get/name/'+deseaseName )
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  updateCaseName(id:string, deseaseName: string): Observable<any>{
    console.log(JSON.stringify({deseaseName: deseaseName}))
    return this.httpClient.patch<any>(this.url + '/desease/'+id,
    JSON.stringify({deseaseName: deseaseName}), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}
