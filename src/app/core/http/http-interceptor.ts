import { Response, RequestOptionsArgs, Request } from '@angular/http';
import { Observable } from 'rxjs';
import { Interceptable, Interceptor } from './interceptable';

export type RequestInterceptor = Interceptor<HttpRequestData, HttpRequestData>;
export type ResponseInterceptor = Interceptor<Observable<Response>, Observable<Response>>;

export interface HttpInterceptor {
  request(): Interceptable<RequestInterceptor>;
  response(): Interceptable<ResponseInterceptor>;
}

export interface HttpRequestData {
  url: string | Request;
  options?: RequestOptionsArgs;
  body?: any;
  cancelRequest?: boolean;
}
