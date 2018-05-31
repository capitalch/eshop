import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { settings, navUrls, tables, httpMessages, localMessages } from '../emart.config';
import { AppService } from '../../service/app.service';
import { IbukiService } from 'ibuki';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit, OnDestroy {
  subs: any;
  catId: any;
  productsRequestSent = false;
  searchString: any;
  pageObject: {
    length: number,
    pageIndex: number,
    pageSize: number,
    pageSizeOptions: number[]
  } = {
      length: 0,
      pageIndex: 0,
      pageSize: +settings.productPageSize,
      pageSizeOptions: [5, 10, 20, 50]
    };
  pageNo = 1;
  products: any;

  constructor(private appService: AppService, private ibukiService: IbukiService,
    private router: Router, private activatedRoute: ActivatedRoute, private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.subs = this.ibukiService.filterOn(httpMessages.products).subscribe(d => {
      d.error ? console.log(d.error) : (
        this.products = d.data
      );
    });

    const sub0 = this.activatedRoute.queryParamMap.subscribe((q: any) => {
      this.pageObject.pageIndex = 0;
      this.catId = q.params.catId;
      this.pageObject.length = q.params.count;
      (q.params.searchString && (q.params.searchString !== 'undefined'))
        ? this.searchString = q.params.searchString : this.searchString = undefined;
      this.pageChange();
    });

    this.subs.add(sub0);
  }

  pageChange() {
    const offSet = this.pageObject.pageIndex * this.pageObject.pageSize;
    let artifact: string, params: any[];
    const a = (+this.catId === 0) && (this.catId = '%');
    this.searchString
      ? (artifact = httpMessages.searchProductsOnCriteria
        , params = [this.searchString, this.catId, offSet, this.pageObject.pageSize])
      : (artifact = httpMessages.productsOnCategory
        , params = [this.catId, offSet, this.pageObject.pageSize]);
    this.appService.waitForSettingsThenPost(httpMessages.products, { id: artifact, params: params });
  }

  // let offSet = this.pageObject.pageIndex * this.pageObject.pageSize;
  // let artifact: string, params: any[];
  // (this.catId == 0) && (this.catId = "%")
  // this.searchString
  //   ? (artifact = httpMessages.searchProductsOnCriteria
  //     , params = [this.searchString, this.catId,  offSet, this.pageObject.pageSize])
  //   : (artifact = httpMessages.productsOnCategory
  //     , params = [this.catId, offSet, this.pageObject.pageSize]);
  // this.brokerService.httpPost(httpMessages.products, {
  //   id: artifact, params: params
  // })

  pageSelected(e) {
    this.pageObject.pageIndex = e.pageIndex;
    this.pageObject.pageSize = e.pageSize;
    this.pageChange();
  }

  showProductDetails(selectedProduct) {
    this.router.navigate([navUrls.productDetails]
      , { queryParams: { id: selectedProduct.id } }
    );
  }

  addToCart(product) {
    const payload = {
      user_id: this.appService.getUserId(),
      product_id: product.id,
      qty: 1,
      isactive: true
    };
    this.ibukiService.httpPost(httpMessages.addSubCart, { tableName: tables.shoppingCart, json: payload });
  }

  getProductLabel(product) {
    const label = product && product.label && product.label.toString();
    return (label);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
