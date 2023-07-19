import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { endPoints } from '../constants/endpoints';
import { addSelerProperty } from '../models/authentication/add-seler-property.model';
import { interestedFinalData } from '../models/authentication/interested.model';
import { Search } from '../models/authentication/seller-search.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) { }

  addSelerProperty(res: addSelerProperty): Observable<any> {
    return this.http.post(environment.BE_URL + endPoints.addSelerProperty, res, { withCredentials: true }).pipe(
      map(data => data)
    )
  }
  updateSelerProperty(res: addSelerProperty, id: number): Observable<any> {
    return this.http.put(environment.BE_URL + endPoints.updateSelerProperty(id), res, { withCredentials: true }).pipe(
      map(data => data)
    )
  }
  getSelerProperty(): Observable<any> {
    return this.http.get(environment.BE_URL + endPoints.getSelerProperty, { withCredentials: true }).pipe(
      map(data => data)
    )
  }
  getSelerPropertyById(id: number): Observable<any> {
    return this.http.get(environment.BE_URL + endPoints.getSelerPropertyById(id), { withCredentials: true }).pipe(
      map(data => data)
    )
  }
  deleteSelerPropertyById(id: number): Observable<any> {
    return this.http.get(environment.BE_URL + endPoints.deleteSelerPropertyById(id), { withCredentials: true }).pipe(
      map(data => data)
    )
  }
  sellerAdvanceSearch(obj: Search): Observable<any> {
    return this.http.get(environment.BE_URL + endPoints.sellerAdvanceSearch(obj), { withCredentials: true }).pipe(
      map(data => data)
    )
  }
  buyerViewAll(obj: Search): Observable<any> {
    return this.http.get(environment.BE_URL + endPoints.buyerViewAll(obj), { withCredentials: true }).pipe(
      map(data => data)
    )
  }
  interestedBuyer(obj: interestedFinalData): Observable<any> {
    return this.http.post(environment.BE_URL + endPoints.buyerInterested, obj, { withCredentials: true }).pipe(
      map(data => data)
    )
  }
  getBuyerDashboard(): Observable<any> {
    return this.http.get(environment.BE_URL + endPoints.getBuyerDashboard, { withCredentials: true }).pipe(
      map(data => data)
    )
  }
  getAgentDashboard(): Observable<any> {
    return this.http.get(environment.BE_URL + endPoints.getAgentDashboard, { withCredentials: true }).pipe(
      map(data => data)
    )
  }
}
