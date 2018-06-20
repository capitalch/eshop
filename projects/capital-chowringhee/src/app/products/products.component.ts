import { Component, OnInit } from '@angular/core';
import {IbukiService} from 'ibuki';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private ibuki: IbukiService) { }

  ngOnInit() {
    this.ibuki.emit("selectedMenu", "products");
  }

}
