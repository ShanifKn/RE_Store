import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/classes/product';

import { ApiService } from 'src/app/shared/services/api.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'shop-sidebar-page',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarPageComponent implements OnInit {
  products: Product[] = [
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
      category: [
        { name: 'Electronics', slug: 'electronics' },
        { name: 'Smartphones', slug: 'smartphones' },
      ],
      pictures: [
        { width: 800, height: 600, url: 'assets/images/products/prod-9.png' },
        { width: 800, height: 600, url: 'assets/images/products/prod-10.png' },
      ],
      sm_pictures: [
        { width: 400, height: 300, url: 'assets/images/products/prod-9.png' },
        { width: 400, height: 300, url: 'assets/images/products/prod-10.png' },
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
      category: [
        { name: 'Electronics', slug: 'electronics' },
        { name: 'Laptops', slug: 'laptops' },
      ],
      pictures: [
        { width: 1024, height: 768, url: 'assets/images/products/prod-8.png' },
        { width: 1024, height: 768, url: 'assets/images/products/prod-7.png' },
      ],
      sm_pictures: [
        { width: 512, height: 384, url: 'assets/images/products/prod-8.png' },
        { width: 512, height: 384, url: 'assets/images/products/prod-7.png' },
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
      category: [
        { name: 'Audio', slug: 'audio' },
        { name: 'Earbuds', slug: 'earbuds' },
      ],
      pictures: [
        { width: 600, height: 600, url: 'assets/images/products/prod-5.png' },
        { width: 600, height: 600, url: 'assets/images/products/prod-4.png' },
      ],
      sm_pictures: [
        { width: 300, height: 300, url: 'assets/images/products/prod-5.png' },
        { width: 300, height: 300, url: 'assets/images/products/prod-4.png' },
      ],
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
    {
      id: 4,
      name: 'Organic Fresh Milk',
      slug: 'organic-fresh-milk',
      price: 4.99,
      sale_price: 4.49,
      review: 150,
      ratings: 4.7,
      until: '2024-12-30',
      stock: 200,
      top: true,
      featured: true,
      new: false,
      category: [
        { name: 'Grocery', slug: 'grocery' },
        { name: 'Dairy', slug: 'dairy' },
      ],
      pictures: [
        { width: 800, height: 600, url: 'assets/images/products/prod-1.png' },
        { width: 800, height: 600, url: 'assets/images/products/prod-2.png' },
      ],
      sm_pictures: [
        { width: 400, height: 300, url: 'assets/images/products/prod-1.png' },
        { width: 400, height: 300, url: 'assets/images/products/prod-2.png' },
      ],
      variants: [
        {
          color: '#FFFFFF',
          color_name: 'Regular',
          price: 4.49,
          size: [{ name: '1L' }, { name: '2L' }],
        },
      ],
      sold: 180,
    },
    {
      id: 5,
      name: 'Cola Classic Pack',
      slug: 'cola-classic-pack',
      price: 12.99,
      sale_price: 10.99,
      review: 300,
      ratings: 4.6,
      until: '2024-12-28',
      stock: 150,
      top: true,
      featured: false,
      new: false,
      category: [
        { name: 'Beverages', slug: 'beverages' },
        { name: 'Soft Drinks', slug: 'soft-drinks' },
      ],
      pictures: [
        { width: 800, height: 600, url: 'assets/images/products/prod-3.png' },
        { width: 800, height: 600, url: 'assets/images/products/prod-4.png' },
      ],
      sm_pictures: [
        { width: 400, height: 300, url: 'assets/images/products/prod-3.png' },
        { width: 400, height: 300, url: 'assets/images/products/prod-4.png' },
      ],
      variants: [
        {
          color: '#FF0000',
          color_name: 'Regular',
          price: 10.99,
          size: [{ name: '6 Pack' }, { name: '12 Pack' }],
        },
        {
          color: '#000000',
          color_name: 'Zero Sugar',
          price: 11.99,
          size: [{ name: '6 Pack' }, { name: '12 Pack' }],
        },
      ],
      sold: 250,
    },
    {
      id: 6,
      name: 'Fresh Bread Loaf',
      slug: 'fresh-bread-loaf',
      price: 3.99,
      sale_price: 3.49,
      review: 220,
      ratings: 4.8,
      until: '2024-12-29',
      stock: 100,
      top: false,
      featured: true,
      new: true,
      category: [
        { name: 'Grocery', slug: 'grocery' },
        { name: 'Bakery', slug: 'bakery' },
      ],
      pictures: [
        { width: 800, height: 600, url: 'assets/images/products/prod-5.png' },
        { width: 800, height: 600, url: 'assets/images/products/prod-6.png' },
      ],
      sm_pictures: [
        { width: 400, height: 300, url: 'assets/images/products/prod-5.png' },
        { width: 400, height: 300, url: 'assets/images/products/prod-6.png' },
      ],
      variants: [
        {
          color: '#8B4513',
          color_name: 'Whole Wheat',
          price: 3.49,
          size: [{ name: 'Regular' }],
        },
        {
          color: '#DEB887',
          color_name: 'White',
          price: 3.29,
          size: [{ name: 'Regular' }],
        },
      ],
      sold: 150,
    },
    {
      id: 7,
      name: 'Energy Drink Pack',
      slug: 'energy-drink-pack',
      price: 15.99,
      sale_price: 13.99,
      review: 180,
      ratings: 4.3,
      until: '2024-12-27',
      stock: 80,
      top: false,
      featured: true,
      new: true,
      category: [
        { name: 'Beverages', slug: 'beverages' },
        { name: 'Energy Drinks', slug: 'energy-drinks' },
      ],
      pictures: [
        { width: 800, height: 600, url: 'assets/images/products/prod-7.png' },
        { width: 800, height: 600, url: 'assets/images/products/prod-8.png' },
      ],
      sm_pictures: [
        { width: 400, height: 300, url: 'assets/images/products/prod-7.png' },
        { width: 400, height: 300, url: 'assets/images/products/prod-8.png' },
      ],
      variants: [
        {
          color: '#00FF00',
          color_name: 'Original',
          price: 13.99,
          size: [{ name: '4 Pack' }, { name: '8 Pack' }],
        },
        {
          color: '#FF69B4',
          color_name: 'Berry Blast',
          price: 14.99,
          size: [{ name: '4 Pack' }, { name: '8 Pack' }],
        },
      ],
      sold: 120,
    },
    {
      id: 8,
      name: 'Premium Chocolate Box',
      slug: 'premium-chocolate-box',
      price: 24.99,
      sale_price: 19.99,
      review: 250,
      ratings: 4.9,
      until: '2024-12-26',
      stock: 60,
      top: true,
      featured: true,
      new: false,
      category: [
        { name: 'Grocery', slug: 'grocery' },
        { name: 'Confectionery', slug: 'confectionery' },
      ],
      pictures: [
        { width: 800, height: 600, url: 'assets/images/products/prod-9.png' },
        { width: 800, height: 600, url: 'assets/images/products/prod-10.png' },
      ],
      sm_pictures: [
        { width: 400, height: 300, url: 'assets/images/products/prod-9.png' },
        { width: 400, height: 300, url: 'assets/images/products/prod-10.png' },
      ],
      variants: [
        {
          color: '#4B0082',
          color_name: 'Dark Assortment',
          price: 19.99,
          size: [{ name: '12 Pieces' }, { name: '24 Pieces' }],
        },
        {
          color: '#8B4513',
          color_name: 'Milk Assortment',
          price: 21.99,
          size: [{ name: '12 Pieces' }, { name: '24 Pieces' }],
        },
      ],
      sold: 200,
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

    setTimeout(() => {

      console.log('toggle')

      this.loaded = true;
      this.firstLoad = true
    }, 400);
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
