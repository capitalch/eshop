import { Component, OnInit } from '@angular/core';
import {BrandData} from '../app.config';
import {IbukiService} from 'ibuki';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  subs: any;
  images : any;
  brand: string;
  enlargedImage: string;
  enlarge: boolean = false;

  constructor(private ibuki: IbukiService) { }

  ngOnInit() {

    //retrieving brand name from ibuki
    this.subs = this.ibuki.behFilterOn('brand').subscribe(d => {
      if (d.error) {
        console.log(d.error);
      } else {
        this.brand = d.data;
      }
    });

    this.images = BrandData.find(b=>b.brand==this.brand).gallery;
  }

  showEnlargedContainer(image)
  {
    this.enlarge = true;
    this.enlargedImage = image;
  }

  closeEnlargedContainer()
  {
    this.enlarge = false;
  }

}
