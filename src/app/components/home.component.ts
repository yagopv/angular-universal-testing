import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  template: `
    <h1>Welcome Home</h1>
    <ul *ngFor='let post of posts'>
      <li>{{ post.title }}</li>
    </ul>
    <a [routerLink]="['/about']">About</a>
  `
})
export class HomeComponent implements OnInit {
  title = 'app';
  posts;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts', {})
      .subscribe((posts) => this.posts = posts);
  }
}


