/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InterceptableHttp } from './interceptable-http';
import { HTTP_INTERCEPTOR_PROVIDER } from './providers';

describe('Service: InterceptableHttp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [...HTTP_INTERCEPTOR_PROVIDER]
    });
  });

  it('should exist', inject([InterceptableHttp], (service: InterceptableHttp) => {
    expect(service).toBeTruthy();
  }));
});
