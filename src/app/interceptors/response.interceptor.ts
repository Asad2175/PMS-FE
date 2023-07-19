import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {finalize, Observable, tap} from 'rxjs';
import { Router } from '@angular/router';
import { SettingsService } from '../services/settings.service';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(private settingsService: SettingsService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
          next: (event: any) => {
            this.settingsService.loader.next(true);
          },
          error: (error) => {
            console.log('Inside error');
            this.settingsService.loader.next(false);
          }

        }
      ),
      finalize(() => {
        this.settingsService.loader.next(false);
      }),
    );
  }
}
