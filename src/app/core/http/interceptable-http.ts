import { Http, Response } from '@angular/http';
import { RequestInterceptor, ResponseInterceptor, HttpRequestData } from './http-interceptor';
import { Observable } from 'rxjs';

export interface InterceptableHttp extends Http {
  _interceptors: PrePostInterceptors;
  _interceptRequest(data: HttpRequestData): HttpRequestData;
  _interceptResponse(response: Observable<Response>): Observable<Response>;
}

export interface PrePostInterceptors {
  pre: RequestInterceptor[];
  post: ResponseInterceptor[];
}
