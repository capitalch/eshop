import { Component, OnInit } from '@angular/core';
import {IbukiService} from 'ibuki';
import { Service } from '../app.config';

@Component({
  selector: 'app-service-center',
  templateUrl: './service-center.component.html',
  styleUrls: ['./service-center.component.scss']
})
export class ServiceCenterComponent implements OnInit {

  serviceCenter : any;
  constructor(private ibuki: IbukiService) { }

  ngOnInit() {
    this.ibuki.emit("selectedMenu", "service");

    //Fetching Service Center
    this.serviceCenter = Service;
    console.log(this.serviceCenter);
  }

}
