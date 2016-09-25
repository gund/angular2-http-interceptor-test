import { InterceptableHttpProviders } from './interceptable-http.service';
import { HttpInterceptorProviders } from './http-interceptor.service';

export const HTTP_INTERCEPTOR_PROVIDERS = [
  ...InterceptableHttpProviders,
  ...HttpInterceptorProviders
];
