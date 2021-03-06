/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ServiceAccount } from '@nqframework/models';
import * as admin from 'firebase-admin';
import { AuthConfigService } from '../config/AuthConfigService';

let firebaseApp: any;
let resolveFn: any;
const firebaseAppPromise: Promise<admin.app.App> = new Promise((resolve) => {
  resolveFn = resolve;
});
export function loadFirebase(config: AuthConfigService): admin.app.App {
  if (firebaseApp) {
    return firebaseApp;
  }
  firebaseApp = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: config.projectId,
      privateKey: config.privateKey.replace(/\\n/g, '\n'),
      clientEmail: config.clientEmail,
    }),
  });
  resolveFn(firebaseApp);
  return firebaseApp;
}

export function getFirebaseApp(): Promise<admin.app.App> {
  return firebaseAppPromise;
}

declare global {
  namespace Express {
    interface Request {
      firebaseUser: admin.auth.DecodedIdToken;
      serviceAccount: ServiceAccount;
    }
  }
}
