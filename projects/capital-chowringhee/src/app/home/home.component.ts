import { Component, OnInit } from '@angular/core';
import {Home} from '../app.config'
import {IbukiService} from 'ibuki';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subs : any;
  content : any;
  carousel : any;
  constructor(private ibuki: IbukiService) { }

  ngOnInit() {
    this.ibuki.emit("selectedMenu", "home");
    this.content = Home.content;
    this.carousel = Home.carousel;
  }

  ngOnDestroy() {

  }

}
