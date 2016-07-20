/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { Provider } from '@angular/core';
import { FIREBASE_PROVIDERS, FirebaseAppConfig, defaultFirebase, AngularFire } from 'angularfire2';

import { DiceChatComponent } from './dice-chat.component';
import { FirebaseService } from './shared/firebase.service';
import { instantiateFirebase } from './shared/firebase.config';

beforeEachProviders(() => [DiceChatComponent, FirebaseService, FIREBASE_PROVIDERS, instantiateFirebase(), AngularFire]);

describe('App: DICECHAT', () => {
  it('should create the app',
      inject([DiceChatComponent], (app: DiceChatComponent) => {
    expect(app).toBeTruthy();
  }));

  describe('defaultFirebase', () => {
    it('should create a provider', () => {
      let provider = instantiateFirebase();

      expect(provider instanceof Provider).toBe(true);
    });
  });
});
