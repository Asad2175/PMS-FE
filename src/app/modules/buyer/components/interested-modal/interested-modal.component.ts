import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface Details {
  username: '',
  roles: [],
  email: '',
  phoneNumber: ''
}

@Component({
  selector: 'app-interested-modal',
  templateUrl: './interested-modal.component.html',
  styleUrls: ['./interested-modal.component.scss']
})
export class InterestedModalComponent implements OnInit {
  roleDefination: {} = {
    'ROLE_SELLER': 'Seller',
    'ROLE_BUYER': 'Buyer',
    'ROLE_AGENT': 'agent',
  };
  @Input() data: Details = {
    username: '',
    roles: [],
    email: '',
    phoneNumber: ''
  };
  constructor(private ngbModal: NgbModal) {
    setTimeout( () => {
      console.log('data', this.data);
    }, 1000);
  }
  closeModal() {
    this.ngbModal.dismissAll();
  }
  ngOnInit(): void {
    
  }
}
