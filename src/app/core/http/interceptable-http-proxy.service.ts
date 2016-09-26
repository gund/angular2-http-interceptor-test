import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpInterceptorService } from './http-interceptor.service';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptableHttpProxyService implements ProxyHandler<any> {

  private static _callStack: string[] = [];

  constructor(private http: Http, private httpInterceptorService: HttpInterceptorService) {
  }

  get(target: any, p: PropertyKey, receiver: any): any {
    InterceptableHttpProxyService._callStack.push(<string>p);
    return receiver;
  }

  apply(target: any, thisArg: any, argArray?: any): any {
    const method = InterceptableHttpProxyService._callStack.pop();
    const args = this.httpInterceptorService._interceptRequest(method, argArray);

    // Check for request cancellation
    if (!args) {
      return Observable.empty();
    }

    const response = this.http[method].apply(this.http, args);

    return this.httpInterceptorService._interceptResponse(method, response);
  }
}

// noinspection JSUnusedGlobalSymbols
export const InterceptableHttpProxyProviders = [
  {
    provide: InterceptableHttpProxyService,
    useFactory: (http, interceptor) => new Proxy(() => null, new InterceptableHttpProxyService(http, interceptor)),
    deps: [Http, HttpInterceptorService]
  }
];
