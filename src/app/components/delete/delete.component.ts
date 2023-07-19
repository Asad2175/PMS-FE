import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  @Output() nextStepEvent = new EventEmitter<string>();

  constructor() {}
  goBack(value: string) {
    this.nextStepEvent.emit(value);
  }
  ngOnInit(): void {
    
  }
}
