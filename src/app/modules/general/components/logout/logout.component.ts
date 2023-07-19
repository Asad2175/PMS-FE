import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  constructor(private authService: AuthService,
    private settings: SettingsService,
    private router: Router,
    private ngbModal: NgbModal) {

  }
  closeModal() {
    this.ngbModal.dismissAll();
  }
  removeAuthToken() {
    document.cookie.split(";").forEach(function (cookie) { 
      document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
  });
  }
  logout = () => {
    this.authService.logout().subscribe( res => {
      this.closeModal();
      this.removeAuthToken();
      this.router.navigate(['/login']);
      this.settings.updateTostr('Logout Successfully', true, true);
    });
  }
}
