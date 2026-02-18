import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { provideRouter } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import {
  bootstrapArrowRepeat,
  bootstrapCheck,
  bootstrapClock,
  bootstrapController,
  bootstrapCupHotFill,
  bootstrapGear,
  bootstrapMap,
  bootstrapPcDisplayHorizontal,
  bootstrapPeopleFill,
  bootstrapShare
} from '@ng-icons/bootstrap-icons';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';

const httpLoaderFactory = (http: HttpClient, baseHref: string) =>
  new TranslateHttpLoader(http, `${baseHref}i18n/`, '.json');

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: APP_BASE_HREF, useFactory: (pl: PlatformLocation) => pl.getBaseHrefFromDOM(), deps: [PlatformLocation] },
    provideIcons(
      { bootstrapArrowRepeat,
        bootstrapCheck,
        bootstrapClock,
        bootstrapController,
        bootstrapCupHotFill,
        bootstrapGear,
        bootstrapPcDisplayHorizontal,
        bootstrapPeopleFill,
        bootstrapShare,
        bootstrapMap
       }),
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom([TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient, APP_BASE_HREF]
      },
      defaultLanguage: 'de'
    })])
  ]
};
