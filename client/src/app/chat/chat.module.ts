import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { ChatService } from './chat-service/chat.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChatRoutingModule,
    SharedModule,
  ],
  // exports: [ChatModule],
  declarations: [ChatComponent],
  providers: [
      ChatService
  ]
})
export class ChatModule { }
