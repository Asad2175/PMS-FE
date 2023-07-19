import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  role: string = '';
  data: any = {};
  constructor(private propertyService: PropertyService) {
    this.role = sessionStorage.getItem('roles') ?? '';
    if (this.role === 'ROLE_AGENT' || this.role === 'ROLE_SELLER') {
      this.getAgentDashboard();
    } else {
      this.getBuyerDashboard();
    }
  }
  getAgentDashboard() {
    this.propertyService.getAgentDashboard().subscribe(res => {
      this.data = res;
    });
  }
  getBuyerDashboard() {
    this.propertyService.getBuyerDashboard().subscribe(res => {
      this.data = res;
    });
  }
  ngOnInit(): void {
    
  }
}
