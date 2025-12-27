import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  imports: [],
  templateUrl: './ifelse.html',
  styleUrl: './ifelse.css',
})
export class Ifelse {
  display: boolean = true;
  x: number = 10;
  toggelDivTwo: boolean = true;

  hideDiv() {
    this.display = false;
  }
  showDiv() {
    this.display = true;
  }
  toggleDiv() {
    this.display = !this.display;
  }
  toggletwo() {
    this.toggelDivTwo = !this.toggelDivTwo;
  }
}
