/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { AngularFire } from 'angularfire2';

import { FirebaseService } from './firebase.service';

describe('Firebase Service', () => {
  beforeEachProviders(() => [FirebaseService, AngularFire]);

  /*it('should ...',
      inject([FirebaseService], (service: FirebaseService) => {
    expect(service).toBeTruthy();
  }));*/
});
