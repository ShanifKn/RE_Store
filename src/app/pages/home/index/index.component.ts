import { Component, OnInit } from '@angular/core';

import { ModalService } from 'src/app/shared/services/modal.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

import { introSlider, brandSlider, serviceSlider, bannerSlider } from '../data';
import { products } from 'src/app/shared/dummy-data';

@Component({
  selector: 're-store-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  products = [];
  posts = [];
  topProducts = [];
  featuredProducts = [];
  loaded = false;
  introSlider = introSlider;
  brandSlider = brandSlider;
  serviceSlider = serviceSlider;
  bannerSlider = bannerSlider;
  categories = [];

  logos: { image: string; link: string }[] = [
    {
      image: 'assets/images/home/logos/1.jpeg',
      link: 'https://www.example1.com',
    },
    {
      image: 'assets/images/home/logos/2.jpeg',
      link: 'https://www.example2.com',
    },
    {
      image: 'assets/images/home/logos/3.jpeg',
      link: 'https://www.example3.com',
    },
    {
      image: 'assets/images/home/logos/4.jpeg',
      link: 'https://www.example4.com',
    },
    {
      image: 'assets/images/home/logos/5.jpeg',
      link: 'https://www.example5.com',
    },
    {
      image: 'assets/images/home/logos/6.jpeg',
      link: 'https://www.example6.com',
    },
    {
      image: 'assets/images/home/logos/7.jpeg',
      link: 'https://www.example4.com',
    },
    {
      image: 'assets/images/home/logos/8.jpeg',
      link: 'https://www.example5.com',
    },
    {
      image: 'assets/images/home/logos/9.jpeg',
      link: 'https://www.example6.com',
    },
  ];

  constructor(
    public apiService: ApiService,
    public utilsService: UtilsService,
    private modalService: ModalService
  ) {
    this.featuredProducts = products;

    this.topProducts = products;

    this.loaded = true;

    console.log(this.featuredProducts);

    // this.apiService.fetchHomeData().subscribe((result) => {
    //   this.products = result.products;
    //   this.posts = result.blogs;
    //   this.topProducts = utilsService.attrFilter(result.products, 'top');

    //   this.loaded = true;
    // });
  }

  ngOnInit(): void {
    this.categories = [
      { name: 'Meat', image: 'assets/images/home/categories/1.png', count: 1 },
      {
        name: 'Fruits',
        image: 'assets/images/home/categories/2.png',
        count: 1,
      },
      {
        name: 'Bakery',
        image: 'assets/images/home/categories/3.png',
        count: 2,
      },
      {
        name: 'Vegetable',
        image: 'assets/images/home/categories/4.png',
        count: 5,
      },
      {
        name: 'Seafood',
        image: 'assets/images/home/categories/5.png',
        count: 3,
      },
      {
        name: 'Drinks',
        image: 'assets/images/home/categories/6.png',
        count: 1,
      },
      {
        name: 'Dairy & Cheese',
        image: 'assets/images/home/categories/7.png',
        count: 1,
      },
      { name: 'Wine', image: 'assets/images/home/categories/8.png', count: 1 },
    ];
  }
}
