import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { profile } from './profile/profile';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  imports: [Login, Signup, profile],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = 'Abhishek';
}
