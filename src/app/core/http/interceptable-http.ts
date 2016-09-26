import { Injectable } from '@angular/core';
import { Http, RequestOptions, ConnectionBackend } from '@angular/http';
import { InterceptableHttpProxyService } from './interceptable-http-proxy.service';

@Injectable()
export class InterceptableHttp extends Http {

  constructor(_backend: ConnectionBackend, _defaultOptions: RequestOptions) {
    super(_backend, _defaultOptions);
  }

}

// noinspection JSUnusedGlobalSymbols
export const InterceptableHttpProviders = [
  {
    provide: InterceptableHttp,
    useFactory: proxy => proxy,
    deps: [InterceptableHttpProxyService]
  }
];
