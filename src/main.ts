import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { FIREBASE_PROVIDERS } from 'angularfire2';

import { DiceChatComponent, environment } from './app/';
import { instantiateFirebase } from './app/shared/firebase.config';

if (environment.production) {
  enableProdMode();
}

bootstrap(DiceChatComponent, [
  FIREBASE_PROVIDERS,
  instantiateFirebase()
]);
