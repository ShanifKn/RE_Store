import { Component, OnInit, Input } from '@angular/core';
import { productSlider } from '../data';
@Component({
  selector: 're-store-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() products = [];
  @Input() loaded = false;
  @Input() title = '';

  sliderOption = productSlider;

  constructor() {}

  ngOnInit(): void {}
}
