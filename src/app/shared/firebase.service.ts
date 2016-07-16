import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Message } from './message';

@Injectable()
export class FirebaseService {
  messages: FirebaseListObservable<any[]>;

  constructor(angularFire: AngularFire) {
    this.messages = angularFire.database.list('/messages');
  }

  getMessages() {
    return this.messages;
  }

  saveMessage(message: Message) {
    this.messages.push(message);
  }
}
