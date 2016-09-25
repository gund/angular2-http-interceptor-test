import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTOR_PROVIDERS } from './core/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [...HTTP_INTERCEPTOR_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {
}
