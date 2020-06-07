import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ApiService } from './services/api-service.service';
import { TimerInterceptor } from './interceptors/timer.interceptor';
import { PatientTableComponent } from './patient-table/patient-table.component';
import { httpInterceptorProviders } from './interceptors';
import { MessagesComponent } from './messages/messages.component';
import { ErrorTextComponent } from './error-text/error-text.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientTableComponent,
    MessagesComponent,
    ErrorTextComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    ApiService,
    httpInterceptorProviders,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
