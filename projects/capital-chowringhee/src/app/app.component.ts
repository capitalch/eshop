import { Component } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import {Urls} from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Capital Chowringhee';

  constructor(private router: Router)
  {
    this.router.navigate([Urls.home]);
  }

  ngOnInit() {
  }
}
