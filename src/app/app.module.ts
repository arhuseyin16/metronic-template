import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeTrExtra from '@angular/common/locales/extra/tr';
// Locale Settings (this sets price decimal seperator like '158.588,85')
import localeTr from '@angular/common/locales/tr';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InlineSVGModule } from 'ng-inline-svg';
import { ClipboardModule } from 'ngx-clipboard';
// Highlight JS
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './modules/auth/_services/auth.service';
import { rootReducer } from './store/reducers/root.reducer';
// #fake-start#
import { FakeAPIService } from './_fake/fake-api.service';
import { SplashScreenModule } from './_metronic/partials/layout/splash-screen/splash-screen.module';

// #fake-end#

registerLocaleData(localeTr, 'tr-TR', localeTrExtra);

function appInitializer(authService: AuthService) {
  return () => {
    return new Promise((resolve) => {
      authService.getUserByToken().subscribe().add(resolve);
    });
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SplashScreenModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    HighlightModule,
    ClipboardModule,
    // #fake-start#
    environment.isMockEnabled
      ? HttpClientInMemoryWebApiModule.forRoot(FakeAPIService, {
          passThruUnknownUrl: true,
          dataEncapsulation: false,
        })
      : [],
    // #fake-end#
    AppRoutingModule,
    InlineSVGModule.forRoot(),
    NgbModule,
    StoreModule.forRoot(rootReducer, {}),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
      deps: [AuthService],
    },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
          json: () => import('highlight.js/lib/languages/json'),
        },
      },
    },
    // Local
    { provide: 'baseUrl', useValue: 'http://localhost/' },

    // MT-Test
    // { provide: 'baseUrl', useValue: 'http://test.url/' },

    // MT-PreProd
    // { provide: 'baseUrl', useValue: 'https://preprodurl/' },

    // MT-Canlı
    // { provide: 'baseUrl', useValue: 'https://liveurl/' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
