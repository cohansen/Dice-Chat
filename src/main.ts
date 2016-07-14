import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

import { DiceChatComponent, environment } from './app/';
import { FIREBASE_CONFIG } from './app/firebase.config';

if (environment.production) {
  enableProdMode();
}

bootstrap(DiceChatComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase(FIREBASE_CONFIG)
]);
