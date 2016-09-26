import { HttpInterceptorService } from './http-interceptor.service';
import { InterceptableHttpProxyProviders } from './interceptable-http-proxy.service';
import { InterceptableHttpProviders } from './interceptable-http';

// noinspection JSUnusedGlobalSymbols
export const HTTP_INTERCEPTOR_PROVIDER = [
  HttpInterceptorService,
  ...InterceptableHttpProxyProviders,
  ...InterceptableHttpProviders
];
