import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent {
  constructor(private settings: SettingsService) {
    setTimeout( () => {
      this.settings.toastr.next({});
    }, 1000);
  }
}
