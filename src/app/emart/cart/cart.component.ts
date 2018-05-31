import { Component, OnInit, OnDestroy } from '@angular/core';
import { IbukiService } from 'ibuki';
import { AppService } from '../../service/app.service';
import { tables, httpMessages, localMessages, navUrls } from '../emart.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  itemsInCart: any;
  subs: any;
  itemsCount = 0;
  isPopulated = false;
  constructor(private ibukiService: IbukiService, private appService: AppService, private router: Router) {

  }

  ngOnInit() {
    const sub1 = this.ibukiService.behFilterOn(localMessages.itemsInCart).subscribe(d => {
      d.error ? console.log(d.error) : (
        this.itemsInCart = d.data.items,
        this.itemsCount = d.data.itemsCount,
        this.isPopulated = true
      );
    });

    this.subs = this.ibukiService.filterOn(localMessages.itemsInCart).subscribe(d => {
      d.error ? console.log(d.error) : (
        this.itemsInCart = d.data.items,
        this.itemsCount = d.data.itemsCount,
        this.isPopulated = true
      );
    });

    const a = (!this.isPopulated) &&
      this.appService.waitForSettingsThenPost(httpMessages.itemsInCart
        , { id: null, params: [this.appService.getUserId()] });
    this.subs.add(sub1);
  }

  addSubCart(arrayIndex, productId, qty) {
    const payload = {
      user_id: this.appService.getUserId(),
      product_id: productId,
      qty: qty,
      isactive: true
    };
    this.ibukiService.httpPost(httpMessages.addSubCart,
      { tableName: tables.shoppingCart, json: payload }, {}, { index: arrayIndex, productId: productId });
  }

  resetCart() {
    this.ibukiService.httpPost(httpMessages.resetCart, { params: [this.appService.getUserId()] });
  }

  deleteItem(id) {
    this.ibukiService.httpPost(httpMessages.deleteItemInCart, { params: [id, this.appService.getUserId()] });
  }

  placeOrderFromCart() {
    // this.brokerService.httpPost(httpMessages.placeOrderFromCart, { params: [this.appService.getUserId()] });
    this.router.navigate([navUrls.placeOrder]);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
