import { HttpInterceptorService } from './http-interceptor.service';
import {
  InterceptableHttpProxyProviders,
  InterceptableHttpProxyNoOverrideProviders
} from './interceptable-http-proxy.service';
import { InterceptableHttpProviders } from './interceptable-http';

const SharedProviders = [
  HttpInterceptorService,
  ...InterceptableHttpProviders
];

export const HTTP_INTERCEPTOR_PROVIDER = [
  ...SharedProviders,
  ...InterceptableHttpProxyProviders
];

export const HTTP_INTERCEPTOR_NO_OVERRIDE_PROVIDER = [
  ...SharedProviders,
  ...InterceptableHttpProxyNoOverrideProviders
];
