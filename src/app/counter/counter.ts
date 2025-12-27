import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count: number = 0;

  //  Basic code
  increment() {
    this.count += 1;
  }
  decrement() {
    if (this.count < 1) {
      this.reset();
    } else {
      this.count -= 1;
    }
  }
  reset() {
    this.count = 0;
  }

  count1: number = 0;
  //optimize code
  handleCoutner(val: string) {
    if (val == 'minus') {
      if (this.count1 < 1) {
        this.count1 = 0;
      } else {
        this.count1 -= 1;
      }
    } else if (val == 'plus') {
      this.count1 += 1;
    } else {
      this.count1 = 0;
    }
  }
}
