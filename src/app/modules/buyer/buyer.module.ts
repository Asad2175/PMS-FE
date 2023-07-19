import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { ViewAllComponent } from './pages/view-all/view-all.component';
import { FormsModule } from '@angular/forms';
import { InterestedModalComponent } from './components/interested-modal/interested-modal.component';


@NgModule({
  declarations: [
    ViewAllComponent,
    InterestedModalComponent
  ],
  imports: [
    CommonModule,
    BuyerRoutingModule,
    FormsModule
  ]
})
export class BuyerModule { }
