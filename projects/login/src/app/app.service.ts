import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor() { }
  getAbsoluteUrl(relativeUrl) {
    return(top.location.host.concat(relativeUrl));
  }

}
