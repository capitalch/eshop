import { Component, OnInit } from '@angular/core';
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

export class AppComponent implements OnInit {
  title = 'login';
  username = '';
  password = '';

  constructor(private appService: AppService,
    private ibuki: IbukiService
  ) { }

  // base64(username:Hash of passowrd)
  ngOnInit() {
    this.ibuki.init(urls);
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
  // var aesUtil = new AesUtil(keySize, iterationCount);
  // var plaintext =  aesUtil.decrypt(salt, iv, encryptionKey, dataToDecrypt);
  // console.log(plaintext);

  decrypt() {
    // const aesutil = new AesUtil(128, 10);
  }

  endecr() {
    const encrypted = crypto.AES.encrypt('Message', 'Secret Passphrase');
    const text = encrypted.toString(); console.log(text);
    const decrypted = crypto.AES.decrypt(text, 'Secret Passphrase');
    console.log(decrypted.toString(crypto.enc.Utf8));
  }

  register() {
    const auth = crypto.AES.encrypt(this.username.concat(':', this.password), 'Secret Passphrase');
    this.ibuki.httpPost('register:login>ibuki'
      , {
        auth: auth.toString()
      });
  }

  login() {
    this.endecr();
    this.ibuki.filterOn('authenticate:login>ibuki').subscribe(d => {
      console.log(d.data);
    });
    const auth = crypto.AES.encrypt(this.username.concat(':', this.password), 'Secret Passphrase');
    this.ibuki.httpPost('authenticate:login>ibuki'
      , {
        auth: auth.toString()
      });


    // bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
    //   const x = 0;
    // });
  }

}
