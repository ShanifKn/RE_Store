import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlModule } from 'angular-owl-carousel';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ElementsRoutingModule } from './elements-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { ElementsListPageComponent } from './elements-list/elements-list.component';
import { ElementsListComponent } from './shared/elements-list/elements-list.component';

@NgModule({
  declarations: [
    ElementsListPageComponent,
    ElementsListComponent,
  ],

  imports: [
    CommonModule,
    LazyLoadImageModule,
    ElementsRoutingModule,
    SharedModule,
    NgbModule,
    OwlModule,
  ],

  exports: [ElementsListComponent],

  providers: [NgbModal],
})
export class ElementsModule {}
