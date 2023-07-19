import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { PropertyComponent } from './pages/property/property.component';
import { PropertyModalComponent } from './components/property-modal/property-modal.component';
import { DeleteComponent } from 'src/app/components/delete/delete.component';
import { FilterSearchComponent } from './pages/filter-search/filter-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ViewInterestedModalComponent } from './components/view-interested-modal/view-interested-modal.component';


@NgModule({
  declarations: [
    PropertyComponent,
    PropertyModalComponent,
    DeleteComponent,
    FilterSearchComponent,
    LogoutComponent,
    NotFoundComponent,
    ViewInterestedModalComponent,
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GeneralModule { }
