import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Toastr } from '../models/authentication/toastr.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public loader: Subject<boolean> = new Subject();
  public modalClosed: Subject<Boolean> = new Subject();
  public toastr: Subject<{}> = new Subject(); 

  constructor() {
    let obj: Toastr = {
      title: 'Application Started',
      success: true,
      show: false
    }
    this.updateTostr('', false, false);
    this.loader.next(false);
    this.modalClosed.next(false);
  }
  updateTostr(title: string = '', success: boolean = false, show: boolean = false) {
    let obj: Toastr = {
      title: title,
      success: success,
      show: show
    };
    this.toastr.next(obj);
  }
  get isLoggedIn() {
    const cookie = document.cookie;
    let checked = false;
    const split = cookie.split(';');
    split.forEach( value => {
      if (String(value.split('=')[0]) === 'assetplus') {
        checked = true;
      } 
    });
    return checked;
  }
}
