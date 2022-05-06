import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/internal/Observable";
import { environment } from '../../environments/environment';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public API_REST = environment.API_REST;
  private httpHeader = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  /**Servicio que realiza la petición GET al endpoint para obtener los registros de la base de datos */
  auth(params:any): Observable<any> {
    const data = this.http.post<any>(`${this.API_REST}/auth`, { params }).toPromise();
    return (data as any);
  }

  setUser(user:any) {
    let user_string = JSON.stringify(user);
    localStorage.setItem("data_u", user_string);
  }
  logOut(){
    localStorage.removeItem("data_u");
  }

  getUser(){
    return JSON.parse(localStorage.getItem('data_u') || '{}');
  }
}
