/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { DiceChatComponent } from './dice-chat.component';

beforeEachProviders(() => [DiceChatComponent]);

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
