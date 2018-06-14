import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {HeaderInfo, Menus,Urls} from '../app.config';
import {IbukiService} from 'ibuki';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerData: any;
  subs : any;
  menus : any;
  selectedMenu: any;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute ,private ibuki: IbukiService) { }  //

  ngOnInit() {

    this.headerData = HeaderInfo;
    this.menus = Menus;

  }

  navigate(menu)
  {
    this.selectedMenu = menu;
    this.router.navigate([menu.toLowerCase()]);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
