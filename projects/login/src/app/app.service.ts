import { Injectable } from '@angular/core';
import { IbukiService } from './ibuki.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private ibuki: IbukiService) {
    ibuki.init({ 'acquire:settings:login': '/assets/settings.json' });
    ibuki.filterOn('acquire:settings:login').subscribe(
      d => {
        ibuki.init(d.data.urls);
      });
    ibuki.httpGet('acquire:settings:login');
  }
  getAbsoluteUrl(relativeUrl) {
    return (top.location.host.concat(relativeUrl));
  }
}
