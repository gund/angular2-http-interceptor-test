/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InterceptableHttpProxyService } from './interceptable-http-proxy.service';
import { HttpModule, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpInterceptorService } from './http-interceptor.service';

describe('Service: InterceptableHttpProxy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        {provide: XHRBackend, useClass: MockBackend},
        HttpInterceptorService,
        InterceptableHttpProxyService
      ]
    });
  });

  it('should exist', inject([InterceptableHttpProxyService], (service: InterceptableHttpProxyService) => {
    expect(service).toBeTruthy();
  }));
});
