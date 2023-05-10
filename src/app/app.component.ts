import { Component, OnInit, isDevMode } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  constructor (private titleSerivce: Title, private router: Router  ) {}

  ngOnInit() {

    this.title = this.titleSerivce.getTitle()
    if (isDevMode()) {
      console.log('Development!');
    } else {
      console.log('Production!');
    }
  }
}
