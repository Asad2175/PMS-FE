import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { preLoginGuard } from './pre-login.guard';

describe('preLoginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => preLoginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
