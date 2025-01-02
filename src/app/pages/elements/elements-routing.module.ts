import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ElementsListComponent } from './shared/elements-list/elements-list.component';

import { ElementsListPageComponent } from './elements-list/elements-list.component';

const routes: Routes = [
  {
    path: '',
    component: ElementsListComponent,
    children: [
      {
        path: '',
        component: ElementsListPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementsRoutingModule {}
