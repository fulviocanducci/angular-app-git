import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from './../http/http.service';
import { Remark } from './remark';


@Injectable({
  providedIn: 'root'
})
export class RemarkService {

  constructor(private httpService: HttpService) { }

  get(): Observable<Remark[]> {
    return this.httpService.get<Remark[]>('remarks');
  }

  post(model: Remark): Observable<Remark> {
    return this.httpService.post<Remark>('remarks', model);
  }
}
