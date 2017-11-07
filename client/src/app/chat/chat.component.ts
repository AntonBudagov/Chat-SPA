import {Component, OnDestroy, OnInit} from '@angular/core';
import { ChatService } from './chat-service/chat.service';
import { ChatMessage } from './models/Chat';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit, OnDestroy {

  public messageForm: FormGroup = new FormGroup({
    messageControl: new FormControl()
  });
  public chatMessages: ChatMessage[] = [];
  // public messageControl: FormControl = new FormControl();
  private timer;
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.getChats();
    this.timer = setInterval(() => {
      this.getChats();
    }, 10000);
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }
  public getChats() {
    this.chatService.getMessages()
      .subscribe((response:ChatMessage[]) => {
        this.chatMessages = response;
      }, () => {
        console.error('Server not allowed');
      });
  }
  public send() {
    const message = new ChatMessage();
    message.nickName = localStorage.getItem('nickname');
    message.message = this.messageForm.controls.messageControl.value;
    // message.message = this.messageControl.value;
    this.chatService.sendMessage(message).subscribe(
        () => {
          this.getChats();
          this.messageForm.reset();
        }
    );
  }
}
