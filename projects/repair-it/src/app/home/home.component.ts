import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BrandData } from '../app.config';
import { IbukiService } from 'ibuki';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  subs: any;
  brand: any;
  brandHomeData: any;
  bindingObj: any = { title: '', content: '', location: '' };
  constructor(private router: Router, private ibuki: IbukiService) { }

  ngOnInit() {

    // retrieving brand name from ibuki
    this.subs = this.ibuki.behFilterOn('brand').subscribe(d => {
      if (d.error) {
        console.log(d.error);
      } else {
        this.brand = d.data;
      }
    });

    this.ibuki.emit('showMenu', true);
    this.ibuki.emit('selectedMenu', 'Home');

    // load data based on parameter
    this.loadData();
  }

  loadData() {
    this.brandHomeData = BrandData.find(b => b.brand === this.brand).home;
    this.bindingObj.title = this.brandHomeData.find(t => t.name === 'title').value;
    this.bindingObj.content = this.brandHomeData.find(t => t.name === 'content').value;
    this.bindingObj.location = this.brandHomeData.find(t => t.name === 'location').value;
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
