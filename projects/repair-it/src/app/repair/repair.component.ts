import { Component, OnInit } from '@angular/core';
import { EmailHelperService, IRepair } from '../services/email-helper.service';
import {IbukiService} from 'ibuki';
import {BrandData, Setup} from '../app.config';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';


@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.scss']
})
export class RepairComponent implements OnInit {

  subs: any;
  brand: any;
  bindingObj : IRepair = {};
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
    this.info = BrandData.find(b=>b.brand==this.brand).repair;
    
    // Getting the to and from email from the Setup
    this.bindingObj.to_email = BrandData.find(b=>b.brand==this.brand).email;
    this.bindingObj.from_email = Setup.email;

    this.ibuki.emit("showMenu", true);
    this.ibuki.emit("selectedMenu", "Repair");
  }

  repair()
  {
    this.emailHelper.repairEmail(this.bindingObj).subscribe(res => {
      let config = new MatSnackBarConfig();
      config.panelClass = 'success-class';
      config.duration = 10000;
      this.snackBar.open(Setup.repairSuccessMsg, null, config);
    }, error => {
      let config = new MatSnackBarConfig();
      config.panelClass = 'error-class';
      config.duration = 10000;
      this.snackBar.open(Setup.repairFailureMsg, null, config);
    });

    this.disableSubmit = !this.disableSubmit;

    this.bindingObj.name = '';
    this.bindingObj.mobile = '';
    this.bindingObj.email = '';
    this.bindingObj.product = '';
    this.bindingObj.complaint = '';
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
