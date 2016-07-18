import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

import { DiceChatComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(DiceChatComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: 'AIzaSyCYgEe_PXUDFxTCDUZr_VHoKFgsRfHVIjk',
    authDomain: 'dice-chat.firebaseapp.com',
    databaseURL: 'https://dice-chat.firebaseio.com',
    storageBucket: 'dice-chat.appspot.com'
  })
]);
