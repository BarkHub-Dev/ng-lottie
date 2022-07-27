import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgLottieModule } from 'ng-lottie';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgLottieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
