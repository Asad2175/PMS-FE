import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-interested-modal',
  templateUrl: './view-interested-modal.component.html',
  styleUrls: ['./view-interested-modal.component.scss']
})
export class ViewInterestedModalComponent implements OnInit{
  @Input() info: any[] = [];
  constructor(private ngbModal: NgbModal) {}
  closeModal() {
    this.ngbModal.dismissAll();
  }
  ngOnInit(): void {
    console.log('data', this.info);
  }
}
