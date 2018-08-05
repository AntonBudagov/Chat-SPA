import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app.routing.module';

import {AppComponent} from './app.component';


// import {ChatModule} from './chat/chat.module';

import 'hammerjs';
import {RegistrationModule} from './registration/registration.module';
import {NotFoundComponent} from './not-found/not-found.component';
import {SharedModule} from './shared/shared.module';
import {AuthModule} from './auth/auth.module';
import {AuthGuard} from './auth/guard/auth.guard';

// https://github.com/rodgc/ngx-socket-io
import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';

const config: SocketIoConfig = {url: 'http://localhost:3000', options: {}};

@NgModule({
  declarations: [
    AppComponent,
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
export class AppModule {
}
