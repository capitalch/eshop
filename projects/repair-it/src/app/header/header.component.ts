import { Component, OnInit, Input, OnDestroy } from '@angular/core';
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
  showMenu = false;
  selectedMenu: any;
  brand: any;

  constructor(private router: Router, private ibuki: IbukiService) { }

  ngOnInit() {

    // Getting the brand selected by the user
    this.subs = this.ibuki.behFilterOn('brand').subscribe(d => {
      if (d.error) {
        console.log(d.error);
      } else {
        this.brand = d.data;
      }
    });

    const sub1 = this.ibuki.filterOn('showMenu').subscribe(d => {
      if (d.error) {
        console.log(d.error);
      } else {
        this.showMenu = d.data;
      }
    });
    this.subs.add(sub1);

    const sub2 = this.ibuki.filterOn('selectedMenu').subscribe(d => {
      if (d.error) {
        console.log(d.error);
      } else {
        this.selectedMenu = d.data;
      }
    });
    this.subs.add(sub2);

    this.headerData = HeaderInfo;
    this.menus = Menus;

  }

  navigate(menu) {
    this.selectedMenu = menu;
    this.router.navigate([menu.toLowerCase()]);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
