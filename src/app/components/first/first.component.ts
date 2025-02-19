import { Component } from '@angular/core';
import {
  ALLOWED_COMPONENT,
  MyFirstGuardedService,
} from '../../services/my-first-guarded.service';

@Component({
  selector: 'app-first',
  standalone: false,
  template: '<p>First Component works</p>',
  providers: [
    MyFirstGuardedService,
    { provide: ALLOWED_COMPONENT, useValue: 'FirstComponent' },
  ],
})
export class FirstComponent {
  constructor(myFirstGuardedService: MyFirstGuardedService) {
    myFirstGuardedService.getMessage();
  }
}
