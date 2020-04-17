import { Injectable } from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
// import { Socket } from 'ngx-socket-io'
// import { Observable } from 'rxjs';


@Injectable({

  providedIn: 'root'
  
})
export class WebSocketServiceService {

  myWebSocket: WebSocketSubject<any> = webSocket('ws://localhost:8000/ws/gameplay/');

 
  constructor() {}


  public getMessages = () => {
    return this.myWebSocket.asObservable()
  }
}
