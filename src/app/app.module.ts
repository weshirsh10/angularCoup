import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import { GameplayComponent } from './gameplay/gameplay.component';
import { CookieModule } from 'ngx-cookie';
// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io'

// const config: SocketIoConfig = { url: 'ws://localhost:8000/ws/gameplay', options: {} };



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    GameplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({ cookieName: 'csrftoken', headerName: 'X-CSRFToken' }),
    CookieModule.forRoot(),
    // SocketIoModule.forRoot(config)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
