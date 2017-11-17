import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatService } from './chat-service/chat.service';
import { ChatMessage } from './models/Chat';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit, OnDestroy {
  public user;
  // public connection
  // public messageSubject: Subject<an> = new Subject();
  public messageForm: FormGroup = new FormGroup({
    messageControl: new FormControl()
  });
  public chatMessages: any[] = [];
  // public messageControl: FormControl = new FormControl();
  // private timer;
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getChats();
    this.chatService.messageSubject.subscribe(() => {
      console.log('chat component update message');
      this.getChats();
    });
    // this.getChats();
    // this.timer = setInterval(() => {
    //   this.getChats();
    // }, 10000);
  }
  ngOnDestroy() {
    // this.connection.unsubscribe();
    // clearInterval(this.timer);
  }
  public getChats() {
    this.chatService.getMessages()
      .subscribe((response: ChatMessage[]) => {
        this.chatMessages = response;
      }, () => {
        console.error('Server not allowed');
      });
  }
  public send(messageForm) {
    const message = new ChatMessage();
    const user = JSON.parse(localStorage.getItem('user'));
    message.userId = user._id;
    message.message = messageForm.controls.messageControl.value;
    // message.message = this.messageControl.value;
    // this.chatService.sendMessage(message);
    // messageForm.reset();
    this.chatService.sendMessage(message).subscribe(
        () => {
          this.getChats();
          messageForm.reset();
        }
    );
  }
}
