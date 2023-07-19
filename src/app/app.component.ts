import { Component, OnInit } from '@angular/core';
import { Toastr } from './models/authentication/toastr.model';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PMS';
  loader: Boolean = false;
  toastr: Toastr | any = {
    title: 'Application Started',
    success: true,
    show: false
  };

  constructor(private settingsService: SettingsService) {
    
  }
  ngOnInit(): void {
    this.settingsService.loader.subscribe( res => {
      this.loader = res;
    });
    this.settingsService.toastr.subscribe( res => {
      console.log('res', res);
      this.toastr = res;
    });
  }
}
