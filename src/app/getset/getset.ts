import { Component } from '@angular/core';

@Component({
  selector: 'app-getset',
  imports: [],
  templateUrl: './getset.html',
  styleUrl: './getset.css',
})
export class Getset {
  name: string = '';
  displayName: string = '';
  email: string = '';
  getName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  showName() {
    this.displayName = this.name;
  }

  setName() {
    this.name = 'Sam';
  }

  getEmail(value: string) {
    this.email = value;
  }
  setEmail() {
    this.email = 'default@gmail.com';
  }
}
