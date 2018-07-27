import { TestBed, inject } from '@angular/core/testing';

import { Auth0Guard } from './auth0.guard';

describe('Auth0Guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Auth0Guard]
    });
  });

  it('should ...', inject([Auth0Guard], (guard: Auth0Guard) => {
    expect(guard).toBeTruthy();
  }));
});
