import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';

import { InjectionToken } from '@angular/core';

// This token will be used to validate the component where the service is allowed
export const ALLOWED_COMPONENT = new InjectionToken<string>('FirstComponent');

@Injectable()
export class MyFirstGuardedService {
  constructor(
    @Optional() @Inject(ALLOWED_COMPONENT) private allowedComponent: string, // checks the component (by injection token value)
    @Optional() @SkipSelf() parent?: MyFirstGuardedService // checks provideIn: 'root'
  ) {
    if (allowedComponent !== 'FirstComponent' || parent) {
      throw new Error(
        'MyFirstGuardedService can only be used inside FirstComponent!'
      );
    }
  }

  getMessage() {
    console.log('This service is restricted to FirstComponent!');
  }
}
