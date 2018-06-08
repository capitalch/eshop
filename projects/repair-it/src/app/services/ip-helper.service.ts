import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class IpHelperService {

  constructor(private http: HttpClient) { }

  getIpAddress() {
    return this.http
          .get('http://api.ipstack.com/check?access_key=6ac02503c0ecd2aea73e20ec478a8d80')
          .map(response => response )
          .catch(this.handleError);
   }

   private handleError(error: HttpErrorResponse):Observable<any> {
     //Log error in the browser console
     console.error('observable error: ', error);
     return Observable.throw(error);
  }
}
