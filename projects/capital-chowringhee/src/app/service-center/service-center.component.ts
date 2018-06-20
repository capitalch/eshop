import { Component, OnInit } from '@angular/core';
import {IbukiService} from 'ibuki';

@Component({
  selector: 'app-service-center',
  templateUrl: './service-center.component.html',
  styleUrls: ['./service-center.component.scss']
})
export class ServiceCenterComponent implements OnInit {

  constructor(private ibuki: IbukiService) { }

  ngOnInit() {
    this.ibuki.emit("selectedMenu", "service");
  }

}
