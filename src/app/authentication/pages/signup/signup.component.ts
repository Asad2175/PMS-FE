import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/authentication/signup.model';
import { AuthService } from 'src/app/services/auth.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  register: FormGroup;
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private settings: SettingsService,
    private router: Router) {
    this.register = this.fb.group({
      "username": ['', Validators.required],
      "email": ['', [Validators.required, Validators.email]],
      "password": ['', Validators.required],
      "confirm_password": ['', Validators.required],
      "phoneNumber": ['', Validators.required],
      "role": ['agent', Validators.required],
    });
  }
  _onlyNumeric(evt: any): any {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  onRegister() {
    const password = this.register.get('password')?.value;
    const confirmPassword = this.register.get('confirm_password')?.value;
    if (password !== confirmPassword) {
      console.log('mismatch');
      this.register.get('confirm_password')?.setErrors({mismatch: true});
      return;
    }
    if (password.length <6) {
      console.log('length error');
      this.register.get('password')?.setErrors({lengthError: true});
    }
    if (this.register.invalid) {
      return;
    }
    let role: string[] = [];
    role.push(this.register.get('role')?.value);
    let finalRes: Register = {
      "username": this.register.get('username')?.value,
      "password": this.register.get('password')?.value,
      "email": this.register.get('email')?.value,
      "role": role,
      "phoneNumber": this.register.get('phoneNumber')?.value
    };
    this.authService.signup(finalRes).subscribe( data => {
      this.router.navigate(['/login']);
      this.settings.updateTostr('Signup Successfully', true, true);
    }, err => {
      this.settings.updateTostr(err.error.message, false, true);
    })
  }
  ngOnInit() {
    
  }
}
