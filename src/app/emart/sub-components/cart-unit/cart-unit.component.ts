import { Component, OnInit, OnDestroy } from '@angular/core';
import { IbukiService } from 'ibuki';
import { AppService } from '../../../service/app.service';
import { Router } from '@angular/router';
import { navUrls, httpMessages } from '../../emart.config';
import { localMessages } from '../../emart.config';

@Component({
  selector: 'app-cart-unit',
  templateUrl: './cart-unit.component.html',
  styleUrls: ['./cart-unit.component.scss']
})
export class CartUnitComponent implements OnInit, OnDestroy {
  cartCount = 0;
  itemsInCart: any[] = [];
  subs: any;
  constructor(private ibukiService: IbukiService, private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.subs = this.ibukiService.filterOn(httpMessages.itemsInCart).subscribe(d => d.error ? console.log(d.error) : (
      this.setItemsInCart(d.data)
    ));

    const sub1 = this.ibukiService.filterOn(httpMessages.addSubCart).subscribe(d => {
      const count = 0;
      d.error ? console.log(d.error) : (
        this.setItemsInCart(d.data[3].rows)
      );
    });

    const sub2 = this.ibukiService.filterOn(httpMessages.resetCart).subscribe(d => {
      d.error ? console.log(d.error) : (
        this.setItemsInCart([])
      );
    });

    const sub3 = this.ibukiService.filterOn(httpMessages.deleteItemInCart).subscribe(d => {
      d.error ? console.log(d.error) : (
        this.setItemsInCart(d.data[1].rows)
      );
    });

    const sub4 = this.ibukiService.filterOn(httpMessages.placeOrderFromCart).subscribe(d => {
      d.error ? console.log(d.error) : (
        this.setItemsInCart([])
      );
    });

    const sub5 = this.ibukiService.behFilterOn('get:settings').subscribe(d => {
      d.error ? console.log(d.error)
        : (
          this.ibukiService.httpPost(httpMessages.itemsInCart, { params: [this.appService.getUserId()] })
        );
    });
    this.subs.add(sub1).add(sub2).add(sub3).add(sub4).add(sub5);
  }

  setItemsInCart(items) {
    this.itemsInCart = items;
    let ret = 0;
    const z = this.itemsInCart && (this.itemsInCart.length > 0) && (
      ret = this.itemsInCart.reduce((a, b) => {
        return a + (+b.qty);
      }, 0)
    );
    this.cartCount = ret;
    this.ibukiService.behEmit(localMessages.itemsInCart, { items: this.itemsInCart, itemsCount: ret });
  }

  showCart() {
    this.router.navigate([navUrls.cart]);
  }

  showLogin() {
    this.router.navigate([navUrls.login]);
  }

  showSignup() {
    this.router.navigate([navUrls.signup]);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
