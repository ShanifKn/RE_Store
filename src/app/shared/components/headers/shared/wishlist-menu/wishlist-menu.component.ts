import { Component, OnInit, OnDestroy } from '@angular/core';

import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 're-store-wishlist-menu',
  templateUrl: './wishlist-menu.component.html',
  styleUrls: ['./wishlist-menu.component.scss'],
})
export class WishlistMenuComponent implements OnInit, OnDestroy {
  constructor(public wishlistService: WishlistService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
