import { Component } from '@angular/core';
import { MySecondGuardedService } from '../../services/my-second-guarded.service';

@Component({
  selector: 'app-second',
  standalone: false,
  template: '<p>Second Component works</p>',
  providers: [MySecondGuardedService],
})
export class SecondComponent {
  constructor(mySecondGuardedService: MySecondGuardedService) {
    mySecondGuardedService.getMessage();
  }
}
