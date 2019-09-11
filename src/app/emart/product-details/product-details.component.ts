import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { navUrls, httpMessages, localMessages } from '../emart.config';
// import { RatingModule } from 'ng2-rating';
import { IbukiService } from 'ibuki';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product: any = {};
  qa = [];
  reviewResponse = [];
  imageUrl: string;
  subs: any;
  constructor(
    private router: Router
    , private activatedRoute: ActivatedRoute
    , private ibukiService: IbukiService
    , private appService: AppService
  ) { }

  // This is just a test comment
  // another comment
  // another comment1
  ngOnInit() {
    let index = 0, a: any, b: any;
    this.subs = this.ibukiService.filterOn(httpMessages.productDetailsOnId).subscribe(d => {
      d.error ? console.log(d.error) : (
        this.product = d.data && d.data[0] && d.data[0].rows[0],
        (a = this.product && this.product.product_info
          && (index = this.product.product_info.findIndex(p => p.name === 'label'))),
        (b = (index >= 0) && this.product && this.product.product_info
          && this.product.product_info.splice(index, 1)),
        this.imageUrl = this.product && this.product.images && this.product.images[0],
        this.qa = d.data && d.data[1] && d.data[1].rows,
        this.reviewResponse = d.data && d.data[2] && d.data[2].rows
      );
    });
    const sub1 = this.activatedRoute.queryParamMap.subscribe((q: any) => {
      const id = q.params.id;
      this.appService.waitForSettingsThenPost(httpMessages.productDetailsOnId
        , { id: null, params: [id, id, id] });
    });
    this.subs.add(sub1);
  }

  changeDisplayImage(url) {
    this.imageUrl = url;
  }

  back() {
    window.history.back();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
