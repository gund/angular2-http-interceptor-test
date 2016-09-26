/* tslint:disable:no-unused-variable */

import { InterceptableStore } from './interceptable-store';

describe('InterceptableStore', () => {
  let mockStore: any[];

  beforeEach(() => mockStore = []);

  it('should create an instance', () => {
    expect(new InterceptableStore<any>(mockStore)).toBeTruthy();
  });
});
