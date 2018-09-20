import { Component } from '@angular/core';
import { IbukiService } from 'ibuki';
// import { bcrypt } from 'bcrypt';
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

  login() {
    const saltRounds = 10;
    const myPlaintextPassword = 's0/\/\P4$$w0rD';
    const someOtherPlaintextPassword = 'not_bacon';

    bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
      const x = 0;
    });
  }

}
