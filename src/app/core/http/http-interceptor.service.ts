import { Injectable } from '@angular/core';
import { HttpInterceptor, RequestInterceptor, ResponseInterceptor } from './http-interceptor';
import { Interceptable } from './interceptable';
import { InterceptableStore } from './interceptable-store';
import { Observable } from 'rxjs';
import { Response } from '@angular/http';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  private _requestInterceptors: RequestInterceptor[] = [];
  private _responseInterceptors: ResponseInterceptor[] = [];
  private _requestStore = new InterceptableStore<RequestInterceptor>(this._requestInterceptors);
  private _responseStore = new InterceptableStore<ResponseInterceptor>(this._responseInterceptors);

  constructor() {
  }

  request(): Interceptable<RequestInterceptor> {
    return this._requestStore;
  }

  response(): Interceptable<ResponseInterceptor> {
    return this._responseStore;
  }

  _interceptRequest(method: string, data: any[]): any[] {
    return this._requestInterceptors.reduce((d, i) => i(d, method), data);
  }

  _interceptResponse(method: string, response: Observable<Response>): Observable<Response> {
    return this._responseInterceptors.reduce((o, i) => o.flatMap(_ => i(o, method)), response);
  }

}
