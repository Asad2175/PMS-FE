import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PropertyService } from 'src/app/services/property.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-property-modal',
  templateUrl: './property-modal.component.html',
  styleUrls: ['./property-modal.component.scss']
})
export class PropertyModalComponent implements OnInit {
  @Input() public propertyDetails: any;
  constructor(private ngbModal: NgbModal,
    private propertyService: PropertyService,
    private settings: SettingsService,
    private settingsService: SettingsService) {
      console.log('value', this.propertyDetails);
  }
  close() {
    this.ngbModal.dismissAll();
  }
  closeModal() {
    this.ngbModal.dismissAll();
    this.modalClosed();
  }
  _onlyNumeric(evt: any): any {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  modalClosed() {
    this.settingsService.modalClosed.next(true);
  }
  onSubmit() {
    // console.log('this.propertyDetails.value', this.propertyDetails.value);
    // return;
    if (this.propertyDetails.get('houseId')?.value) {
      this.propertyService.updateSelerProperty(this.propertyDetails.value, this.propertyDetails.get('houseId')?.value).subscribe( res => {
        this.settings.updateTostr('Updated Successfully', true, true);
        this.closeModal();
      }, err => {
        this.settings.updateTostr(err.error.message, false, true);
      })
    } else {
      this.propertyService.addSelerProperty(this.propertyDetails.value).subscribe( res => {
        this.settings.updateTostr('Added Successfully', true, true);
        this.closeModal();
      })
    }
  }
  
  ngOnInit(): void {
    
  }
}
