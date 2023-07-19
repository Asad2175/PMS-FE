import { Component } from '@angular/core';
import { InterestedModalComponent } from '@buyer/components/interested-modal/interested-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { interestedFinalData } from 'src/app/models/authentication/interested.model';
import { Search } from 'src/app/models/authentication/seller-search.model';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss']
})
export class ViewAllComponent {
  propertyListing: [] = [];
  minPrice: string = '';
  maxPrice: string = '';
  type: string = 'rent';
  constructor(private sellerService: PropertyService,
    private ngbModal: NgbModal) {}
  search() {
    let obj: Search = {
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      type: this.type
    }
    this.sellerService.buyerViewAll(obj).subscribe( res => {
      this.propertyListing = res;
    });
  }
  interested(obj: any) {
    console.log('obj', obj);
    let finalData: interestedFinalData = {
      houseId: obj['house']['houseId'],
      userId: obj['house']['sellerId'],
      interested: !obj.interested,
      uploadedByType: obj['userInfoResponse']['roles'][0],
      propertyType: obj['house']['type']
    };
    this.sellerService.interestedBuyer(finalData).subscribe( res => {
      this.search();
    });
  }
  viewAll(details: any) {
    console.log('details', details);
    let data = this.ngbModal.open(InterestedModalComponent, {centered: true, windowClass: 'interestedModal'});
    data.componentInstance.data = details;
  }
  ngOnInit(): void {
    this.search();
  }
}
