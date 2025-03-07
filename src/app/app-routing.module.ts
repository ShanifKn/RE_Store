import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './shared/layout/layout.component';
import { IndexComponent } from './pages/home/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: IndexComponent,
      },
      {
        path: 'elements',
        loadChildren: () =>
          import('./pages/elements/elements.module').then(
            (m) => m.ElementsModule
          ),
      },
      {
        path: 'shop',
        loadChildren: () =>
          import('./pages/shop/shop.module').then((m) => m.ShopModule),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('./pages/product/product.module').then((m) => m.ProductModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/pages/404',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      anchorScrolling: 'disabled',
      scrollPositionRestoration: 'disabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
