import { Injectable } from '@angular/core';
// import {Http, RequestOptions, Headers} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {ChatMessage} from "../models/Chat";

@Injectable()
export class ChatService {
  public chatUrl: any = 'http://localhost:3000/messages';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  public getMessages(): Observable<ChatMessage[]> {
    // header('resp.setHeader('Access-Control-Allow-Origin','*') ')
    return this.http.get(this.chatUrl)
			.map(res => res as ChatMessage[] || []);
  }
  public sendMessage(message: any) {

    return this.http.post(this.chatUrl, message, {headers: this.headers});
  }
}
