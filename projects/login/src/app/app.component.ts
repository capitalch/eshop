import { Component, OnInit, OnDestroy } from '@angular/core';
import { IbukiService } from './ibuki.service';
import { urls } from './app.settings';
import * as crypto from 'crypto-js';
import { AppService } from './app.service';
import { concat } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'login';
  username = '';
  password = '';
  subs: any;

  constructor(private appService: AppService,
    private ibuki: IbukiService
  ) { }

  // base64(username:Hash of passowrd)
  ngOnInit() {
    this.ibuki.init(urls);
    // this.subs = this.ibuki.filterOn('register:login>ibuki').subscribe(d => {
    //   d.error
    //     ? (console.log(d.error))
    //     : (console.log(d.data));
    // });
    // const sub1 = this.ibuki.filterOn('authenticate:login>ibuki').subscribe(d => {
    //   if (d.error) {
    //     console.log(d.error);
    //   } else {
    //     console.log(d.data);
    //   }
    // });
    // const sub2 = this.ibuki.filterOn('verify-token:login>ibuki').subscribe(d => {
    //   if (d.error) {
    //     console.log(d.error);
    //   } else {
    //     console.log(d.data);
    //   }
    // });

    // this.subs.add(sub1);
  }
  encrypt() {
    const base64Key = crypto.enc.Hex.parse('0123456789abcdef0123456789abcdef');
    const iv = crypto.enc.Hex.parse('abcdef9876543210abcdef9876543210');

    const encrypted = crypto.AES.encrypt(
      this.username.concat(':', this.password),
      base64Key,
      { iv: iv }
    );
    return (encrypted.ciphertext.toString(crypto.enc.Base64));
  }

  decrypt() {
    // const aesutil = new AesUtil(128, 10);
  }

  endecr() {
    const encrypted = crypto.AES.encrypt('Message', 'Secret Passphrase');
    const text = encrypted.toString();
    // console.log(text);
    const decrypted = crypto.AES.decrypt(text, 'Secret Passphrase');
    // console.log(decrypted.toString(crypto.enc.Utf8));
  }

  async register() {
    try {
      const auth = crypto.AES.encrypt(this.username.concat(':', this.password), 'Secret Passphrase');
      const d = this.ibuki.httpPost$('register:login'
        , {
          auth: auth.toString()
        });
      d.err && this.ibuki.throw(d.err);
      await d.data.toPromise();
    } catch (err) {
      console.log(err.Message || err.message);
    }
  }

  async login() {
    try {
      this.endecr();
      const auth = crypto.AES.encrypt(this.username.concat(':', this.password), 'Secret Passphrase');
      const d = this.ibuki.httpPost$('authenticate:login', {
        auth: auth.toString()
      });
      d.err && this.ibuki.throw(d.err);
      const data = await d.data.toPromise();
      console.log(data);
    } catch (err) {
      console.log(err.Message || err.message);
    }
  }

  async verifyToken() {
    try {
      const d = this.ibuki.httpPost$('verify-token:login', {
        token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3VzaCIsImppbmZvIjpudWxsLCJpYXQiOjE1Mzg5MjA5MTAsImV4cCI6MTUzODkyNDUxMH0.mpFmq2ToW0XWnxrM34DSMTY63fwlnHuGcKEfCMTmpw0`
      });
      d.err && this.ibuki.throw(d.err);
      const data = await d.data.toPromise();
      console.log(data);
    } catch (err) {
      console.log(err.Message || err.message);
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
