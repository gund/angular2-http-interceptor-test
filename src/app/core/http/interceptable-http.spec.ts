/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InterceptableHttp } from './interceptable-http';
import { HTTP_INTERCEPTOR_PROVIDER } from './providers';
import { HttpModule, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('Service: InterceptableHttp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        {provide: XHRBackend, useClass: MockBackend},
        ...HTTP_INTERCEPTOR_PROVIDER
      ]
    });
  });

  it('should exist', inject([InterceptableHttp], (service: InterceptableHttp) => {
    expect(service).toBeTruthy();
  }));
});
