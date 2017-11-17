import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GiphyComponent } from './giphy/giphy.component';
import { AuthComponent } from './auth/auth.component';

import {AppRoutingModule} from './app.routing.module';
// import {ChatModule} from './chat/chat.module';

import 'hammerjs';
import {RegistrationModule} from './registration/registration.module';
import { NotFoundComponent } from './not-found/not-found.component';
import {SharedModule} from './shared/shared.module';
import {AuthModule} from './auth/auth.module';
import {AuthGuard} from './auth/guard/auth.guard';

import { SocketIoConfig, SocketIoModule } from 'ng-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
@NgModule({
  declarations: [
    AppComponent,
    GiphyComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    RegistrationModule,
    SocketIoModule.forRoot(config),
    AuthModule,
    AppRoutingModule,

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
