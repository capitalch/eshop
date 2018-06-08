import { Component, OnInit } from '@angular/core';
import {Brands,Urls} from '../app.config';
import { Router, ActivatedRoute } from '@angular/router';
import { IbukiService } from 'ibuki';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  brands: any = {};
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private ibuki: IbukiService) { }  //

  ngOnInit() {
    this.brands = Brands;
    this.ibuki.emit("showMenu", false);
    this.ibuki.emit("selectedMenu", "Home");
  }

  selectBrand(brand)
  {
    this.ibuki.emit("showMenu", true);
    this.ibuki.behEmit("brand", brand);
    this.router.navigate([Urls.home])
  }
}
