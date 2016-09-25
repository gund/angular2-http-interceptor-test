/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { InterceptableHttpService, InterceptableHttpProviders } from './interceptable-http.service';

describe('Service: InterceptableHttp', () => {
  let service: InterceptableHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        {provide: XHRBackend, useClass: MockBackend},
        ...InterceptableHttpProviders,
        {provide: InterceptableHttpService, useFactory: s => s, deps: [Http]}
      ]
    });
  });

  beforeEach(inject([InterceptableHttpService], s => service = s));

  it('should exist', () => expect(service).toBeTruthy());
  it('should replace Http service', inject([Http], http => expect(service).toBe(http)));
});
