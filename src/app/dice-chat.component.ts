import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Message } from './shared/message';
import { FirebaseService } from './shared/firebase.service';

@Component({
  moduleId: module.id,
  selector: 'dice-chat-root',
  templateUrl: 'dice-chat.component.html',
  styleUrls: ['dice-chat.component.css'],
  providers: [
    FirebaseService
  ]
})
export class DiceChatComponent {
  title = 'Dice Chat';
  messages: Observable<any>;

  constructor(private firebaseService: FirebaseService) {
    this.messages = firebaseService.getMessages();
  }

  send(newMessage: string) {
    let author = 'Cody';

    this.firebaseService.saveMessage(new Message(newMessage, author));
  }
}
