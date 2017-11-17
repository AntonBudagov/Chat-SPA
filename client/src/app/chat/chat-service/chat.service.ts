import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Socket } from 'ng-socket-io';
// import * as io from 'socket.io-client';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ChatMessage } from '../models/Chat';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ChatService {
  public chatUrl: any = 'http://localhost:3000/messages';
  public messageSubject: Subject<any> = new Subject();
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  // private socket;
  constructor(private http: HttpClient, private socket: Socket) {
    this.socket.fromEvent('updateMessages').subscribe(data => {
      console.log('chat service update message');
      this.messageSubject.next(true);
    });

    // this.socket.emit('hello');
  }

  public getMessages(): Observable<ChatMessage[]> {
    return this.http.get(this.chatUrl)
        .map(res => res as ChatMessage[] || []);
  }
  public sendMessage(message: any): Observable<any> {
    return this.http.post<ChatMessage>(this.chatUrl, message, {headers: this.headers})
        .map((response) => {
            this.socket.emit('newMessage');
            console.log('response ok');
            return response;
        });
  }

  public update() {
    return this.socket.fromEvent('updateMessages')
        .map((data) => {
          this.messageSubject.next(true);
          // this.getMessages();
          console.log(data);
        });
  }

  // public getMessages() {
  //   const observable = new Observable(observer => {
  //     this.socket = io(this.chatUrl);
  //     this.socket.on((data) => {
  //       observer.next(data);
  //     });
  //     return () => {
  //       this.socket.disconnect();
  //     };
  //   })
  //   console.log(observable);
  //   return observable;
  // }
  // public sendMessage(message) {
  //   this.socket.emit('add-message', message);
  // }
}
