import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { HttpInterceptor, RequestInterceptor, ResponseInterceptor } from './http-interceptor';
import { Interceptable, Interceptor } from './interceptable';
import { InterceptableHttp } from './interceptable-http';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  private _preInterceptor = new InterceptableStore<RequestInterceptor>(this.http._interceptors.pre);
  private _postInterceptor = new InterceptableStore<ResponseInterceptor>(this.http._interceptors.post);

  constructor(@Inject(Http) private http: InterceptableHttp) {
  }

  request(): Interceptable<RequestInterceptor> {
    return this._preInterceptor;
  }

  response(): Interceptable<ResponseInterceptor> {
    return this._postInterceptor;
  }

}

export const HttpInterceptorProviders = [HttpInterceptorService];

class InterceptableStore<T extends Interceptor<any, any>> implements Interceptable<T> {

  constructor(private store: T[]) {
  }

  addInterceptor(interceptor: T): Interceptable<T> {
    this.store.push(interceptor);
    return this;
  }

  removeInterceptor(interceptor: T): Interceptable<T> {
    this.store.splice(this.store.indexOf(interceptor), 1);
    return this;
  }

  clearInterceptors(interceptors?: T[]): Interceptable<T> {
    if (interceptors.length > 0) {
      interceptors.forEach(i => this.removeInterceptor(i));
    } else {
      this.store.splice(0);
    }

    return this;
  }

}
