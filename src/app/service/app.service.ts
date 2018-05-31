import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IbukiService } from 'ibuki';
import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs/observable/interval';
import { ActivatedRoute } from '@angular/router';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AppService {
  // defaultCategory: any;
  // isNotInitialized = true;
  isInitialized = false;
  constructor(private httpClient: HttpClient
    , private ibukiService: IbukiService
    , private activatedRoute: ActivatedRoute
  ) {
    // get settings file
    Observable.of(null).delay(0).subscribe(x => {
      httpClient
        .get('assets/settings.json')
        .subscribe(d => {
          this.ibukiService.init(d);
          this.ibukiService.behEmit('get:settings', d);
          // this.isNotInitialized = false;
          this.isInitialized = true;
        }, err => {
          console.log(err);
        });
    });
    // httpClient
    //   .get('assets/settings.json')
    //   .subscribe(d => {
    //     this.ibukiService.init(d);
    //     this.ibukiService.behEmit('get:settings', d);
    //     this.notInitialized = false;
    //   }, err => {
    //     console.log(err);
    //   });
  }

  // getDefaultCategory() {
  //   return (this.defaultCategory);
  // }

  // setDefaultCategory(cat) {
  //   this.defaultCategory = cat;
  // }
  // getIsNotInitialized() {
  //   return (this.isNotInitialized);
  // }

  // getIsInitialized() {
  //   return (this.isInitialized);
  // }

  // waits and polls till settings is downloaded and then does http request
  waitForSettingsThenPost(id, params) {
    const source1: Observable<number> = interval(10);
    const subs = source1.subscribe(x => {
      if (this.isInitialized) {
        this.ibukiService.httpPost(id, params);
        subs.unsubscribe();
      }
    });
  }

  getUserId() {
    return (1);
  }
}
