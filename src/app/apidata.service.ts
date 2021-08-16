import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';


@Injectable()
export class DataService {
  
  private _url: string = "https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/posts"
  constructor(private http: HttpClient) { }

  getPost(){
    return this.http.get(this._url)
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server error")
    
  }
}
