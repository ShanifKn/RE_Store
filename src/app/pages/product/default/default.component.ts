import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from 'src/app/shared/classes/product';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
	selector: 'product-default-page',
	templateUrl: './default.component.html',
	styleUrls: ['./default.component.scss']
})

export class DefaultPageComponent implements OnInit {

	product: Product;
	prev: Product;
	next: Product;
	related = [];
	loaded = false;

	constructor(
		public apiService: ApiService,
		private activeRoute: ActivatedRoute,
		public router: Router
	) {
		activeRoute.params.subscribe(params => {
			this.loaded = false;
			this.apiService.getSingleProduct(params['slug']).subscribe({
				next: (result) => {
				  if (result === null) {
					this.router.navigate(['/pages/404']);
					return;
				  }
			
				  this.product = result.product;
				  this.prev = result.prevProduct;
				  this.next = result.nextProduct;
				  this.related = result.relatedProducts;
				  this.loaded = true;
				},
				error: (error) => {
				  // Set dummy data in case of error
				  this.product = dummyProduct;
				  this.prev = dummyProduct;
				  this.next = dummyProduct;
				  this.related = [dummyProduct, dummyProduct, dummyProduct]; // Add multiple dummy products for related
				  this.loaded = true;
				}
			  });
		});
	}

	ngOnInit(): void {
	}
}
  
  // Comprehensive dummy product with realistic data
  export const dummyProduct: Product = {
	id: 0,
	name: "Melyar Basmati Rice",
	slug: "melyar-basmati-rice",
	price: 99.99,
	sale_price: 89.99,
	review: 4,
	ratings: 12,
	until: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
	stock: 10,
	new: true,
	category: [
	  {
		name: "Growcerys",
		slug: "growcerys"
	  }
	],
	pictures: [
	  {
		width: 800,
		height: 800,
		url:'assets/images/products/prod-3.png'
	  }
	],
	sm_pictures: [
	  {
		width: 300,
		height: 300,
		url: 'assets/images/products/prod-3.png'
	  }
	],
	variants: [
	  {
		color: "#000000",
		color_name: "Black",
		price: 99.99,
		size: [
		  {
			name: "Medium"
		  }
		]
	  }
	],
	sold: 0
  };