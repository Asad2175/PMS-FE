import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/authentication/login.model';
import { AuthService } from 'src/app/services/auth.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login: FormGroup;
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private settings: SettingsService) {
    this.login = this.fb.group({
      "password": ['', Validators.required],
      "username": ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.login.invalid) {
      return;
    }
    let res: Login = {
      "username": this.login.get('username')?.value,
      "password": this.login.get('password')?.value
    } 
    this.authService.login(res).subscribe( response => {
      document.cookie = response.token.split('=')[0] + '=' + response.token.split('=')[1];
      sessionStorage.setItem('roles', response.roles[0]);
      this.router.navigate(['/dashboard']);
      this.settings.updateTostr('Login Successfully', true, true);
    }, err => {
      this.settings.updateTostr(err.error.message, false, true);
    })
  }
}
