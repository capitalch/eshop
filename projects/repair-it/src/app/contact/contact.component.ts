import { Component, OnInit } from '@angular/core';
import { EmailHelperService, IContact } from '../services/email-helper.service';
import {IbukiService} from 'ibuki';
import {BrandData, Setup} from '../app.config';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  subs: any;
  brand: any;
  bindingObj : IContact = {};
  disableSubmit = false;
  info: any;

  constructor(private emailHelper: EmailHelperService, private ibuki: IbukiService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.disableSubmit = false;

    //Getting the brand selected by the user
    this.subs = this.ibuki.behFilterOn('brand').subscribe(d => {
      if (d.error) {
        console.log(d.error);
      } else {
        this.brand = d.data;
      }
    });

    //Getting the info from Setup
    this.info = BrandData.find(b=>b.brand==this.brand).contact;

    // Getting the to and from email from the Setup
    this.bindingObj.to_email = BrandData.find(b=>b.brand==this.brand).email;
    this.bindingObj.from_email = Setup.email;

    this.ibuki.emit("showMenu", true);
    this.ibuki.emit("selectedMenu", "Contact");
  }

  contact()
  {
    this.emailHelper.contactEmail(this.bindingObj).subscribe(res => {
      let config = new MatSnackBarConfig();
      config.panelClass = 'success-class';
      config.duration = 3000;
      this.snackBar.open(Setup.contactSuccessMsg, null, config);
    }, error => {
      let config = new MatSnackBarConfig();
      config.panelClass = 'error-class';
      config.duration = 3000;
      this.snackBar.open(Setup.contactFailureMsg, null, config);
    });
    
    this.disableSubmit = !this.disableSubmit;

    this.bindingObj.name = '';
    this.bindingObj.mobile = '';
    this.bindingObj.email = '';
    this.bindingObj.message = '';
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
