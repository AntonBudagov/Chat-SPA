import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable()
export class RegistrationService {
  public userUrl: any = 'http://localhost:3000/users';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  public registration(user) {
    return this.http.post(this.userUrl, user, {headers: this.headers})
  }

}
