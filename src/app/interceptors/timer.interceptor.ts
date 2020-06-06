import { Injectable } from '@angular/core';
import { 
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';
import {  tap, finalize } from 'rxjs/operators';


@Injectable()
export class TimerInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ):Observable<HttpEvent<any>>{

    const started = Date.now();
    let ok: string;

    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if(event instanceof HttpResponse) {
            ok = 'Success'
          }
        },
        error => ok = 'failed'
      ),
      finalize(() => {
        const timeElapsed = Date.now() - started;
        console.log(timeElapsed);
      })
    )
  } 
}
