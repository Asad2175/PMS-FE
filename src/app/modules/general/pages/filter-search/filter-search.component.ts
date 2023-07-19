import { Component, OnInit } from '@angular/core';
import { ViewInterestedModalComponent } from '@general/components/view-interested-modal/view-interested-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Search } from 'src/app/models/authentication/seller-search.model';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.scss']
})
export class FilterSearchComponent implements OnInit {
  propertyListing: [] = [];
  minPrice: string = '';
  maxPrice: string = '';
  type: string = 'rent';

  constructor(private sellerService: PropertyService,
    private ngbModal: NgbModal) {

  }
  search() {
    let obj: Search = {
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      type: this.type
    }
    this.sellerService.sellerAdvanceSearch(obj).subscribe( res => {
      this.propertyListing = res;
    });
  }
  openInfoModal(info: []) {
    let data = this.ngbModal.open(ViewInterestedModalComponent, {centered: true, windowClass: 'interestedModal'});
    data.componentInstance.info = info;
  }
  ngOnInit(): void {
    this.search();
  }
}
