import { Component, OnInit } from '@angular/core';

import { ModalService } from 'src/app/shared/services/modal.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

import {
  introSlider,
  brandSlider,
  serviceSlider,
  bannerSlider,
  TopCategory,
} from '../data';
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
  topSellingProducts = [];
  loaded = false;
  introSlider = introSlider;
  brandSlider = brandSlider;
  serviceSlider = serviceSlider;
  bannerSlider = bannerSlider;
  categories = [];
  topCategory = [];

  // introSlider: any = {
  //   loop: true,
  //   margin: 10,
  //   nav: true,
  //   dots: true,
  //   autoplay: true,
  //   responsive: {
  //     0: { items: 1 },
  //     600: { items: 1 },
  //     1000: { items: 1 },
  //   },
  // };

  slides = [
    {
      backgroundImage: 'assets/images/home/intro-slider/1.jpg',
      backgroundColor: '#2a323e',
      contentPosition: 'intro-content intro-content-left',
      saleText: 'Clearout Sale',
      title: 'Only Organic<br />Large Box',
      description: 'Sale 30% off',
      link: '/shop/sidebar/list',
    },
    {
      backgroundImage: 'assets/images/home/intro-slider/4.jpg',
      backgroundColor: '#dd6584',
      contentPosition: 'intro-content intro-content-right',
      saleText: 'Clearout Sale',
      title: 'Good For You<br />And The Planet',
      description: 'Fast Shipping',
      link: '/shop/sidebar/list',
    },
    {
      backgroundImage: 'assets/images/home/intro-slider/2.jpg',
      backgroundColor: '#dd6584',
      contentPosition: 'intro-content intro-content-right',
      saleText: 'Clearout Sale',
      title: 'Good For You<br />And The Planet',
      description: 'Fast Shipping',
      link: '/shop/sidebar/list',
    },
  ];

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

    this.topProducts = products.slice().reverse();

    this.topSellingProducts = products;

    this.loaded = true;

    console.log(this.featuredProducts);

    this.topCategory = TopCategory;

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
        image: 'assets/images/home/categories/5.jpg',
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
