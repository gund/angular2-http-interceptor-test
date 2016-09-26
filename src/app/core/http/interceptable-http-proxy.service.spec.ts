/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InterceptableHttpProxyService } from './interceptable-http-proxy.service';

describe('Service: InterceptableHttpProxy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterceptableHttpProxyService]
    });
  });

  it('should exist', inject([InterceptableHttpProxyService], (service: InterceptableHttpProxyService) => {
    expect(service).toBeTruthy();
  }));
});
