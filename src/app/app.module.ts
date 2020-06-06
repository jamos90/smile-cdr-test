import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ApiService } from './services/api-service.service';
import { TimerInterceptor } from './interceptors/timer.interceptor';
import { PatientTableComponent } from './patient-table/patient-table.component';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  declarations: [
    AppComponent,
    PatientTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    ApiService,
    httpInterceptorProviders,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
