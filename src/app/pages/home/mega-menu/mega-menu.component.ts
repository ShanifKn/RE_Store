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
  menuData = menuData; // Imported menu data
  activeCategory: string | null = null; // Tracks active category
  activeSubcategory: string | null = null; // Tracks active subcategory

  // Show categories on hover
  showCategory(category: string) {
    this.activeCategory = category;


    if (category === 'All Categories') {
      const allCategoriesMenu = this.menuData.find(
        (menu) => menu.title === 'All Categories'
      );
      if (allCategoriesMenu && allCategoriesMenu.subcategories.length > 0) {
        this.activeSubcategory = allCategoriesMenu.subcategories[0].name;
      }
    }
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
