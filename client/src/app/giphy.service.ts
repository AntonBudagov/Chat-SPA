import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GiphyService {


  errorMsg = 'error';

  constructor(private http: Http) { }
  link = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';

  getGifs(name: string): Observable<any[]> {
    return this.http.get(this.link + name)
        .map((res) => res.json().data)

  }

  private handleError(error:any) {

    const errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to cтonsole instead
    return Observable.throw(errMsg);
  }


}
