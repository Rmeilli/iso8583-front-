import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';

const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch())
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
