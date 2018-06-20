import { Component, OnInit } from '@angular/core';
import { EmailHelperService, IContact } from '../services/email-helper.service';
import {IbukiService} from 'ibuki';
import {Contact, Setup} from '../app.config';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  bindingObj : IContact = {};
  disableForm = false;
  location: any;
  info: any;
  contactList: any;
  landline: any;
  managerInfo: any;

  constructor(private emailHelper: EmailHelperService, private snackBar: MatSnackBar, private ibuki: IbukiService) { }

  ngOnInit() {

    this.ibuki.emit("selectedMenu", "contact");

    this.disableForm = false;

    //Getting location for google map
    this.location = Contact.location;

    //Getting the contact info from Setup
    this.info = Contact.info;

    //Getting contact persons 
    this.contactList = Contact.contactList;

    //Getting Landline number
    this.landline = Contact.landLine;

    //Getting Manager Info
    this.managerInfo = Contact.managerInfo;

    // Getting the to and from email from the Setup
    this.bindingObj.to_email = Setup.to_email;
    this.bindingObj.from_email = Setup.from_email;
  }

  contact()
  {
    this.emailHelper.contactEmail(this.bindingObj).subscribe(res => {
      let config = new MatSnackBarConfig();
      config.panelClass = 'success-class';
      config.duration = 10000;
      this.snackBar.open(Setup.contactSuccessMsg, null, config);
    }, error => {
      let config = new MatSnackBarConfig();
      config.panelClass = 'error-class';
      config.duration = 10000;
      this.snackBar.open(Setup.contactFailureMsg, null, config);
    });
    
    this.disableForm = !this.disableForm;

    this.bindingObj.name = '';
    this.bindingObj.mobile = '';
    this.bindingObj.email = '';
    this.bindingObj.message = '';
  }

}
