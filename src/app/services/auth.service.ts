import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { endPoints } from '../constants/endpoints';
import { Login } from '../models/authentication/login.model';
import { Register } from '../models/authentication/signup.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(res: Register): Observable<any> {
    return this.http.post(environment.BE_URL + endPoints.signup, res).pipe(
      map(data => data)
    )
  }
  login(res: Login): Observable<any> {
    return this.http.post(environment.BE_URL + endPoints.login, res).pipe(
      map( data => data)
    )
  }
  logout(): Observable<any> {
    return this.http.post(environment.BE_URL + endPoints.logout, {}).pipe(
      map( data => data)
    )
  }
}
