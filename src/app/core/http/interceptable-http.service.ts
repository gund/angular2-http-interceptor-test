import { Injectable } from '@angular/core';
import {
  Http, RequestOptions, ConnectionBackend, XHRBackend, Response, Request,
  RequestOptionsArgs
} from '@angular/http';
import { InterceptableHttp, PrePostInterceptors } from './interceptable-http';
import { HttpRequestData } from './http-interceptor';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptableHttpService extends Http implements InterceptableHttp {

  // noinspection JSUnusedGlobalSymbols
  _interceptors: PrePostInterceptors = {pre: [], post: []};

  constructor(_backend: ConnectionBackend, _defaultOptions: RequestOptions) {
    super(_backend, _defaultOptions);
  }

  request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
    const req = this._interceptRequest({url, options});
    return this._interceptResponse(super.request(req.url, req.options));
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    const req = this._interceptRequest({url, options});
    return this._interceptResponse(super.get(<string>req.url, req.options));
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    const req = this._interceptRequest({url, options, body});
    return this._interceptResponse(super.post(<string>req.url, req.body, req.options));
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    const req = this._interceptRequest({url, options, body});
    return this._interceptResponse(super.put(<string>req.url, req.body, req.options));
  }

  // noinspection ReservedWordAsName
  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    const req = this._interceptRequest({url, options});
    return this._interceptResponse(super.delete(<string>req.url, req.options));
  }

  patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    const req = this._interceptRequest({url, options, body});
    return this._interceptResponse(super.patch(<string>req.url, req.body, req.options));
  }

  head(url: string, options?: RequestOptionsArgs): Observable<Response> {
    const req = this._interceptRequest({url, options});
    return this._interceptResponse(super.head(<string>req.url, req.options));
  }

  options(url: string, options?: RequestOptionsArgs): Observable<Response> {
    const req = this._interceptRequest({url, options});
    return this._interceptResponse(super.options(<string>req.url, req.options));
  }

  _interceptRequest(data: HttpRequestData): HttpRequestData {
    return this._interceptors.pre.reduce((d, i) => i(d), data);
  }

  _interceptResponse(response: Observable<Response>): Observable<Response> {
    return this._interceptors.post.reduce((o, i) => o.flatMap(_ => i(o)), response);
  }

}

export const InterceptableHttpProviders = [
  {
    provide: Http,
    useFactory: (backend, defaultOptions) => new InterceptableHttpService(backend, defaultOptions),
    deps: [XHRBackend, RequestOptions]
  }
];
