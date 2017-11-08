import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../user.model';

@Injectable()
export class AuthService {
  public authUrl: any = 'http://localhost:3000/authorize';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  public authorize(user) {

    return this.http.post<User>(this.authUrl, user, {headers: this.headers});
  }
}
