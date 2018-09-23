import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderInfo, Menus, Urls } from '../app.config';
import { IbukiService } from 'ibuki';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  headerData: any;
  subs: any;
  menus: any;
  selectedMenu: any = 'home';
  constructor(private router: Router, private ibuki: IbukiService) { }  //

  ngOnInit() {

    this.headerData = HeaderInfo;
    this.menus = Menus;
    this.subs = this.ibuki.filterOn('selectedMenu').subscribe(d => {
      if (d.error) {
        console.log(d.error);
      } else {
        this.selectedMenu = d.data;
      }
    });
  }

  navigate(menu) {
    this.selectedMenu = menu;
    this.router.navigate([menu]);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
