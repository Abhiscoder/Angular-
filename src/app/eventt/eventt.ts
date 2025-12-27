import { Component } from '@angular/core';

@Component({
  selector: 'app-eventt',
  imports: [],
  templateUrl: './eventt.html',
  styleUrl: './eventt.css',
})
export class Eventt {
  handleEvent(event: MouseEvent) {
    console.log('Type:', event.type);
    console.log('Target:', event.target);
    console.log('class:', (event.target as Element).className);
  }
}
