import { Component, OnInit } from '@angular/core';
import { form1 } from './app.config';
import { GxCustomService } from './service/gx-custom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './gx-form.basic.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  myLayout: any = {};

  constructor(private gxCustomService: GxCustomService) { }
  ngOnInit() {
    this.myLayout = form1;
  }
}
