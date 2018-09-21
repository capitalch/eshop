import { Component } from '@angular/core';
import { IbukiService } from 'ibuki';
// import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto-js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'login';
  username = '';
  password = '';

  constructor(private ibuki: IbukiService) { }

  // base64(username:Hash of passowrd)

  encrypt() {
    const base64Key = crypto.enc.Hex.parse('0123456789abcdef0123456789abcdef');
    const iv = crypto.enc.Hex.parse('abcdef9876543210abcdef9876543210');

    const encrypted = crypto.AES.encrypt(
      'test',
      base64Key,
      { iv: iv }
    );
    console.log(encrypted.ciphertext.toString(crypto.enc.Base64));
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

  login() {
    this.endecr();



    // bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
    //   const x = 0;
    // });
  }

}
