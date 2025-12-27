import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { profile } from './profile/profile';
import { Counter } from './counter/counter';
import { Eventt } from './eventt/eventt';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  imports: [Login, Signup, profile, Counter, Eventt],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  handleClick() {
    console.log('Function called');
    this.otherfunction();
  }

  otherfunction() {
    console.log('otherfunction called');
  }
}
