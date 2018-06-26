import { Component, OnInit } from '@angular/core';
import { Products } from '../app.config';
import { Router, ActivatedRoute } from '@angular/router';
import { IbukiService } from 'ibuki';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories : any;
  constructor(private router: Router, private ibuki: IbukiService) { }

  ngOnInit() {

    this.ibuki.emit("selectedMenu", "products");
    
    //Fetch the categories
    this.categories = Products.category;

  }

  selectCategory(category)
  {
    this.ibuki.behEmit("category", category);
    this.router.navigate(["productsList"])
  }
}
