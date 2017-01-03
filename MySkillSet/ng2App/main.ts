// This is entry point for Angular application
export * from './polyfills';
// Uncomment When 3rd party vendor packages added
//export * from './vendor';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
