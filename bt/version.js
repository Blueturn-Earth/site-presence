import {
  getSite,
} from './site.js';

export const APP_VERSION = '8.463';
// The bundle (obfuscated, cached by its source) does not contain this file: it reads the version from here, so a version bump does not rebuild it.
globalThis.__BT_APP_VERSION__ = APP_VERSION;
console.log(`${getSite().brand.name} ${APP_VERSION}`);
