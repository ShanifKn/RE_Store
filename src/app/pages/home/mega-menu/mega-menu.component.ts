import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 're-store-mega-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss'],
})
export class MegaMenuComponent {
  categories = [
    { title: 'Offers' },
    { title: 'Fresh Food' },
    { title: 'Grocery' },
    { title: 'Grocery Non Food' },
    { title: 'Housewares' },
    { title: 'Stationary' },
    { title: 'Electronics' },
    { title: 'Garden' },
    { title: 'Camping' },
  ];

  subCategories = [
    {
      title: 'Fresh Food',
      subCategory: [
        { title: 'Vegetables' },
        { title: 'Fruits' },
        { title: 'Meat' },
      ],
    },
    {
      title: 'Grocery',
      subCategory: [
        { title: 'Rice & Grains' },
        { title: 'Spices' },
        { title: 'Oil' },
      ],
    },
    {
      title: 'Electronics',
      subCategory: [
        { title: 'Mobile Phones' },
        { title: 'Laptops' },
        { title: 'Accessories' },
      ],
    },
  ];

  hoveredSubCategories: any[] | null = null;

  onHover(category: any) {
    
    const found = this.subCategories.find(
      (subCategory) => subCategory.title === category.title
    );

    this.hoveredSubCategories = found ? [found] : null;
  }

  resetHover() {
    this.hoveredSubCategories = null;
  }
}
