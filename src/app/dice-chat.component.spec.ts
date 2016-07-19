/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { FIREBASE_PROVIDERS, AngularFire } from 'angularfire2';

import { DiceChatComponent } from './dice-chat.component';
import { FirebaseService } from './shared/firebase.service';

beforeEachProviders(() => [DiceChatComponent, FirebaseService, FIREBASE_PROVIDERS, AngularFire]);

describe('App: DICECHAT', () => {
  it('should create the app',
      inject([DiceChatComponent], (app: DiceChatComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'Dice Chat\'',
      inject([DiceChatComponent], (app: DiceChatComponent) => {
    expect(app.title).toEqual('Dice Chat');
  }));
});
