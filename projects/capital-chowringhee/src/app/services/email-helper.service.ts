import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


export interface IContact {
  name?: string,
  mobile?: string,
  email?:string,
  message?:string
  to_email?: string,
  from_email?: string
}


@Injectable({
  providedIn: 'root'
})
export class EmailHelperService {

  emailUrl : any;
  constructor(private http: HttpClient) { }

  contactEmail(message: IContact): Observable<IContact> | any {
    this.emailUrl = './email-sender/contact.php';
    return this.http.post(this.emailUrl, message).map(response => {
      //console.log('Mail Sent', response);
      return response;
    })
    .catch(error => {
      //console.log('Failed', error);
      return Observable.throw(error)
    })
  }
}
