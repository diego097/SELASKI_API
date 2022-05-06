import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/internal/Observable";
import { environment } from '../../environments/environment';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  /**Encabezados */
  public API_REST = environment.API_REST;
  private httpHeader = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  /**Servicio que realiza la petición GET al endpoint */
  list(): Observable<Order> {
    const data = this.http.get<Order>(`${this.API_REST}/orders`, {headers: this.httpHeader}).toPromise();
    return (data as any);
  }

  /**Servicio que realiza la petición POST al endpoint usado para crear nuevos registros*/
  create(params:any): Observable<any> {
    const data = this.http.post<any>(`${this.API_REST}/orders`, { params: params ,headers: this.httpHeader}).toPromise();
    return (data as any);
  }

  /**Servicio que realiza la petición PUT al endpoint usado para actualizar registros*/
  update(params:any): Observable<any> {
    const data = this.http.put<any>(`${this.API_REST}/orders`, { params: params ,headers: this.httpHeader}).toPromise();
    return (data as any);
  }

  /**Servicio que realiza la petición DELETE al endpoint usado para eliminar registros*/
  delete(id:any): Observable<any> {
    const data = this.http.delete<any>(`${this.API_REST}/orders`, { params: id ,headers: this.httpHeader}).toPromise();
    return (data as any);
  }
}
