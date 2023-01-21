import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  private socket = io('http://localhost:8000');
  constructor() { }

  sendMessage(data) {
    this.socket.emit('message', data);
  }

  receivedReply() {
    const observable = new Observable<any>(observer => {
      this.socket.on('reply', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

}