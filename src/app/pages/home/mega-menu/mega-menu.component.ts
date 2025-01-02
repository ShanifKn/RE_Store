import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { menuData } from '../data';

@Component({
  selector: 're-store-mega-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss'],
})
export class MegaMenuComponent {
  categories = [
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

  menuData = menuData; // Imported menu data
  onHover(category: any) {
    const found = this.subCategories.find(
      (subCategory) => subCategory.title === category.title
    );

    console.log(found);

    this.hoveredSubCategories = found ? [found] : null;
  }

  resetHover() {
    this.hoveredSubCategories = null;
  }

  activeCategory: string | null = null; // Tracks active category
  activeSubcategory: string | null = null; // Tracks active subcategory

  // Show categories on hover
  showCategory(category: string) {
    this.activeCategory = category;
    console.log(this.activeCategory);

    // if (category === 'All Categories') {
    //   const allCategoriesMenu = this.menuData.find(
    //     (menu) => menu.title === 'All Categories'
    //   );
    //   if (allCategoriesMenu && allCategoriesMenu.subcategories.length > 0) {
    //     this.activeSubcategory = allCategoriesMenu.subcategories[0].name;
    //   }
    // }
  }

  // Show subcategories on hover
  showSubcategory(subcategory: string) {
    this.activeSubcategory = subcategory;
  }

  // Hide menu on mouse leave
  hideCategory() {
    this.activeCategory = null;
    this.activeSubcategory = null;
  }
}
