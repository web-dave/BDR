import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { AboutModule } from './about/about.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorService } from './error.service';

@NgModule({
  declarations: [AppComponent, TopNavComponent, WelcomeComponent],
  imports: [BrowserModule, AppRoutingModule, AboutModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
