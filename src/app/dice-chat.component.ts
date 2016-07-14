import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'dice-chat-root',
  templateUrl: 'dice-chat.component.html',
  styleUrls: ['dice-chat.component.css']
})
export class DiceChatComponent {
  title = 'Dice Chat';
  item: FirebaseObjectObservable<any[]>;

  constructor(angularFire: AngularFire) {
    this.item = angularFire.database.object('/item');

    console.log(this.item);
  }
}
