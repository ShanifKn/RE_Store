import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from 'src/app/shared/services/api.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'shop-sidebar-page',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarPageComponent implements OnInit {
  products = [
    {
      id: 1,
      name: 'Smartphone X',
      slug: 'smartphone-x',
      price: 999,
      sale_price: 899,
      review: 120,
      ratings: 4.5,
      until: '2024-12-31',
      stock: 50,
      top: true,
      featured: false,
      new: true,
      short_desc: true,
      category: [
        { name: 'Electronics', slug: 'electronics' },
        { name: 'Smartphones', slug: 'smartphones' },
      ],
      pictures: [
        { width: 800, height: 600, url: 1 },
        { width: 800, height: 600, url: 2 },
      ],
      sm_pictures: [
        { width: 400, height: 300, url: 3 },
        { width: 400, height: 300, url: 4 },
      ],
      variants: [
        {
          color: '#000000',
          color_name: 'Black',
          price: 899,
          size: [{ name: '64GB' }, { name: '128GB' }],
        },
        {
          color: '#FFFFFF',
          color_name: 'White',
          price: 949,
          size: [{ name: '64GB' }, { name: '128GB' }],
        },
      ],
      sold: 30,
    },
    {
      id: 2,
      name: 'Laptop Z',
      slug: 'laptop-z',
      price: 1499,
      sale_price: 1399,
      review: 85,
      ratings: 4.8,
      until: '2025-01-15',
      stock: 20,
      top: false,
      featured: true,
      new: false,
      short_desc: true,
      category: [
        { name: 'Electronics', slug: 'electronics' },
        { name: 'Laptops', slug: 'laptops' },
      ],
      pictures: [
        { width: 1024, height: 768, url: 5 },
        { width: 1024, height: 768, url: 6 },
      ],
      sm_pictures: [
        { width: 512, height: 384, url: 7 },
        { width: 512, height: 384, url: 8 },
      ],
      variants: [
        {
          color: '#0000FF',
          color_name: 'Blue',
          price: 1399,
          size: [
            { name: '8GB RAM, 256GB SSD' },
            { name: '16GB RAM, 512GB SSD' },
          ],
        },
      ],
      sold: 15,
    },
    {
      id: 3,
      name: 'Wireless Earbuds',
      slug: 'wireless-earbuds',
      price: 199,
      sale_price: 149,
      review: 200,
      ratings: 4.2,
      until: '2024-12-25',
      stock: 100,
      top: false,
      featured: false,
      new: true,
      short_desc: true,
      category: [
        { name: 'Audio', slug: 'audio' },
        { name: 'Earbuds', slug: 'earbuds' },
      ],
      pictures: [{ width: 600, height: 600, url: 9 }],
      sm_pictures: [{ width: 300, height: 300, url: 10 }],
      variants: [
        {
          color: '#FF0000',
          color_name: 'Red',
          price: 149,
          size: [],
        },
        {
          color: '#00FF00',
          color_name: 'Green',
          price: 149,
          size: [],
        },
      ],
      sold: 50,
    },
  ];
  perPage = 12;
  type = 'list';
  totalCount = 0;
  orderBy = 'default';
  pageTitle = 'List';
  toggle = false;
  searchTerm = '';
  loaded = false;
  firstLoad = false;

  constructor(
    public activeRoute: ActivatedRoute,
    public router: Router,
    public utilsService: UtilsService,
    public apiService: ApiService
  ) {}

  ngOnInit(): void {
    if (window.innerWidth > 991) this.toggle = false;
    else this.toggle = true;
  }

  @HostListener('window: resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth > 991) this.toggle = false;
    else this.toggle = true;
  }

  changeOrderBy(event: any) {
    this.router.navigate([], {
      queryParams: { orderBy: event.currentTarget.value, page: 1 },
      queryParamsHandling: 'merge',
    });
  }

  toggleSidebar() {
    if (
      document.querySelector('body').classList.contains('sidebar-filter-active')
    )
      document.querySelector('body').classList.remove('sidebar-filter-active');
    else document.querySelector('body').classList.add('sidebar-filter-active');
  }

  hideSidebar() {
    document.querySelector('body').classList.remove('sidebar-filter-active');
  }
}
