import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TimerInterceptor } from  './timer.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TimerInterceptor, multi: true }
]

