/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Message} from './message';

describe('Message', () => {
  it('should create an instance', () => {
    let text = '';
    expect(new Message(text)).toBeTruthy();
  });
});
