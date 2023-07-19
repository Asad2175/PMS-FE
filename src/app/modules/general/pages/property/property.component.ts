import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PropertyModalComponent } from 'src/app/modules/general/components/property-modal/property-modal.component';
import { PropertyService } from 'src/app/services/property.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  @ViewChild('searchString', { static: true }) searchString!: ElementRef;
  addProperty: FormGroup;
  propertyListing = [];
  deleteId: number = 0;
  tr: any = [];
  constructor(private ngbModal: NgbModal,
    private fb: FormBuilder,
    private propertyService: PropertyService,
    private settingsService: SettingsService) {
      this.addProperty = this.fb.group({
        city: ['', Validators.required],
        houseNumber: ['', Validators.required],
        price: ['', Validators.required],
        noOfBedRooms: ['', Validators.required],
        specifications: ['', Validators.required],
        type: ['rent', Validators.required],
        streetNo: ['', Validators.required],
        houseId: ['']
      });
  }
  modalSettings() {
    this.settingsService.modalClosed.next(false);
  }
  clearControl() {
    this.addProperty.reset();
    this.addProperty.patchValue({
      city: '',
      houseNumber: '',
      price: '',
      noOfBedRooms: '',
      specifications: '',
      type: 'rent',
      houseId: '',
      streetNo: ''
    });
  }
  openModal() {
    this.modalSettings();
    this.clearControl();
    const modalRef = this.ngbModal.open(PropertyModalComponent, { centered: true });
    console.log('this.addProperty', this.addProperty.value);
    modalRef.componentInstance.propertyDetails = this.addProperty;
  }
  edit(id: number) {
    this.propertyService.getSelerPropertyById(id).subscribe( res => {
      this.openModal();
      this.addProperty.patchValue({
        city: res.city,
        houseNumber: res.houseNumber,
        price: res.price,
        noOfBedRooms: res.noOfBedRooms,
        specifications: res.specifications,
        type: res.type,
        houseId: res.houseId,
        streetNo: res.streetNo
      });
      // const modalRef = this.ngbModal.open(PropertyModalComponent, { centered: true });
      // modalRef.componentInstance.propertyDetails = this.addProperty;
    });
  }
  delete(content: any, id: number) {
    this.deleteId = id;
    this.ngbModal.open(content, { centered: true });
  }
  acceptDelete(event: string) {
    if (event === 'cancel') {
      this.deleteId = 0;
      this.ngbModal.dismissAll();
      return;
    }
    this.propertyService.deleteSelerPropertyById(this.deleteId).subscribe( res => {
      this.deleteId = 0;
      this.ngbModal.dismissAll();
      this.getSellerListing();
    });
  }
  getSellerListing() {
    this.propertyService.getSelerProperty().subscribe( res => {
      if (res.length > 0) {
        this.propertyListing = res;
        return;
      }
      this.propertyListing = [];
    });
  }
  ngOnInit(): void {
    this.getSellerListing();
    this.settingsService.modalClosed.subscribe( res => {
      if (res) {
        this.getSellerListing();
      }
    });
  }
}
