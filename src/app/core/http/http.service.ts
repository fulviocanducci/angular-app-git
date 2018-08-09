import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  header: HttpHeaders;
  headers;

  constructor(private httpClient: HttpClient) {
    this.header = new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8');
  }

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(`${environment.url_api}${url}`, {headers: this.header});
  }

  post<T>(url: string, model: T): Observable<T> {
    return this.httpClient.post<T>(`${environment.url_api}${url}`, model, {headers: this.header});
  }

  find<T>(url: string, id: number): Observable<T> {
    return this.httpClient.get<T>(`${environment.url_api}${url}/${id}`, {headers: this.header});
  }

  put<T>(url: string, model: T, id: number): Observable<T> {
    return this.httpClient.put<T>(`${environment.url_api}${url}/${id}`, model, {headers: this.header});
  }

  delete<T>(url: string, id: number): Observable<T> {
    return this.httpClient.delete<T>(`${environment.url_api}${url}/${id}`, {headers: this.header});
  }
}
