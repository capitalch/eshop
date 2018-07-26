import { Component, OnInit } from '@angular/core';
import { Products } from '../app.config';
import {IbukiService} from 'ibuki';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  subs : any;
  category : any;
  products : any;
  constructor(private ibuki: IbukiService) { }

  ngOnInit() {
    this.ibuki.emit("selectedMenu", "products");

    //Getting category selected by user
    this.subs = this.ibuki.behFilterOn('category').subscribe(d => {
      if (d.error) {
        console.log(d.error);
      } else {
         this.category= d.data;
      }
    });

    //Fetching products based on category selected
    this.products = Products.category.find(x=>x.name ==this.category).product;
  }

  ngOnDestroy()
  {
    this.subs.unsubscribe();
  }

}
