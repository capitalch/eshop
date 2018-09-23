import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { IbukiService } from 'ibuki';
import { AppService } from '../../service/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { navUrls, httpMessages } from '../emart.config';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'
  ]
})

export class CategoryComponent implements OnInit, OnDestroy {
  subs: any;
  categories: any[] = [];
  queryParams: any;
  searchString: any;
  lazyTree: any[] = [];
  selectedFiles: any;
  collapseSidebar = false;
  dynamicCategoryClass = 'collapsible-container';
  dynamicCategoryOpenerClass = 'collapsible-button-container-close';

  constructor(private router: Router
    , private activatedRoute: ActivatedRoute
    , private appService: AppService
    , private ibukiService: IbukiService) {
    console.log('category');
  }

  ngOnInit() {
    console.log('categories init:');
    this.subs = this.ibukiService.filterOn(httpMessages.categoriesWithCount).subscribe(d => {
      if (d.error) {
        console.log(d.error);
      } else {
        this.categories = d.data;
        this.processLazy();
        if (this.queryParams.keys.length === 0) {
          this.router.navigate([navUrls.product], { queryParams: { catId: d.data[0].id, count: d.data[0].product_cnt } });
        }
      }
    });

    const sub0 = this.activatedRoute.queryParamMap.subscribe(q => {
      this.queryParams = q;
      console.log('query map:', q);
    });

    const sub1 = this.ibukiService.behFilterOn('get:settings').subscribe(d => {
      d.error ? console.log(d.error)
        : (this.ibukiService.httpPost(httpMessages.categoriesWithCount));
    });

    const sub2 = this.ibukiService.filterOn(httpMessages.headerToCategory).subscribe(d => {
      d.error ? (console.log(d.error)) : (
        this.categories = d.data,
        this.searchString = d.carryBag,
        this.processLazy(),
        this.router.navigate([navUrls.product]
          , { queryParams: { catId: 0, count: d.data[0].product_cnt, searchString: this.searchString } }
        )
      );
    });

    this.subs.add(sub0).add(sub1).add(sub2);
  }

  processLazy() {
    this.lazyTree = this.categories.filter(x => {
      return (x.parent_id == null);
    });
  }

  loadNode(e) {
    const item = e.node;
    const children = this.categories.filter(x => {
      return (item.id === x.parent_id);
    });
    item.children = children;
  }

  nodeSelect(e) {
    this.loadNode(e);
    e.node.expanded ? e.node.expanded = false : e.node.expanded = true;
    const catId = e.node.id;
    this.router.navigate([navUrls.product]
      , { queryParams: { catId: catId, count: e.node.product_cnt, searchString: this.searchString } }
    );
  }

  expandSideMenu() {
    this.collapseSidebar = !this.collapseSidebar;
    this.dynamicCategoryClass = this.dynamicCategoryClass ===
      'collapsible-container-close' ? 'collapsible-container' : 'collapsible-container-close';
    this.dynamicCategoryOpenerClass = this.dynamicCategoryOpenerClass ===
      'collapsible-button-container-close' ? 'collapsible-button-container' : 'collapsible-button-container-close';
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
