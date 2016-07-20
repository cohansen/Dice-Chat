import { Provider } from '@angular/core';
import { FirebaseAppConfig, defaultFirebase } from 'angularfire2';

const firebaseConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyCYgEe_PXUDFxTCDUZr_VHoKFgsRfHVIjk',
  authDomain: 'dice-chat.firebaseapp.com',
  databaseURL: 'https://dice-chat.firebaseio.com',
  storageBucket: 'dice-chat.appspot.com'
};

export function instantiateFirebase(): Provider {
  return defaultFirebase(firebaseConfig);
};
