import { ElementRef, Inject, Injectable, Optional } from '@angular/core';

@Injectable()
export class MySecondGuardedService {
  constructor(@Optional() @Inject(ElementRef) private elementRef: ElementRef) {
    if (elementRef) {
      const componentName = elementRef.nativeElement.tagName.toLowerCase();

      if (componentName !== 'app-second') {
        throw new Error(
          'MySecondGuardedService can only be used inside SecondComponent!'
        );
      }
    }
  }

  getMessage() {
    console.log('This service is restricted to SecondComponent!');
  }
}
