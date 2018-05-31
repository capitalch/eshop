import { Component , OnInit} from '@angular/core';
import { form1 } from './app.config';
import { GxCustomService } from './service/gx-custom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  myLayout: any = {};

  ngOnInit() {
    this.myLayout = form1;
  }
}
