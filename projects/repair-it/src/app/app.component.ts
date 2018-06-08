import { Component } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import {Urls} from './app.config';
import {IpHelperService} from './services/ip-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Repair-it';

  constructor(private router: Router, private ipService: IpHelperService)
  {
    this.router.navigate([Urls.selection]);
  }

  ngOnInit() {
    this.ipService.getIpAddress().subscribe(data => {
      console.log(data);
    });
  }
}
