import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterSearchComponent } from './pages/filter-search/filter-search.component';
import { PropertyComponent } from './pages/property/property.component';

const routes: Routes = [
  {
    path: 'add-property',
    component: PropertyComponent
  },
  {
    path: 'search',
    component: FilterSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
