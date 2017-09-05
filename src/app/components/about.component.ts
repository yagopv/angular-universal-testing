import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <h1>About</h1>
    <a [routerLink]="['/']">Home</a>
  `
})
export class AboutComponent {

}


