import { Component, OnInit } from '@angular/core';
import { LogoutComponent } from '@general/components/logout/logout.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserMenu } from 'src/app/mock/user-roles';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menu: any[] = UserMenu;
  userRole: string | null = sessionStorage.getItem('roles') ?? null;
  activeMenu: any[] = [];
  constructor(private ngbModal: NgbModal) {}
  logout() {
    this.ngbModal.open(LogoutComponent, { centered: true });
  }
  getMenu() {
    this.activeMenu = this.menu.filter( t => t.roles.includes(this.userRole));
  }
  ngOnInit(): void {
    this.getMenu();
  }
}
