import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/internal/Observable";
import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public API_REST = environment.API_REST;
  private httpHeader = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  /**Servicio que realiza la petición GET al endpoint para obtener los registros de la base de datos */
  list(): Observable<User> {
    const data = this.http.get<User>(`${this.API_REST}/users`, {headers: this.httpHeader}).toPromise();
    return (data as any);
  }

}
