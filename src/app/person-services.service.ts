import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {IPerson} from './person';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonServicesService {

  private x : string = "/assets/JSONData/persons.json";

  getData() : Observable<IPerson[]>{
    return this.http.get<IPerson[]>(this.x).pipe(catchError(this.showError));
  }
  showError(errorResponse : HttpErrorResponse){
    if (errorResponse.error instanceof ErrorEvent){
      console.error('client side error ',errorResponse.error.message);
    } else{
      console.error('Server Side Error ', errorResponse.error.message);
    }
    return throwError('Please try again later, we are working to solve this issue');
  }
  constructor(private http : HttpClient) { }
}
