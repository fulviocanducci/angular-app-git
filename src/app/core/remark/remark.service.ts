import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from './../http/http.service';
import { Remark } from './remark';
import { IHttpService } from '../interfaces/IHttpService';


@Injectable({
  providedIn: 'root'
})
export class RemarkService implements IHttpService<Remark> {

  constructor(private httpService: HttpService) { }

  get(): Observable<Remark[]> {
    return this.httpService.get<Remark[]>('remarks');
  }

  post(model: Remark): Observable<Remark> {
    return this.httpService.post<Remark>('remarks', model);
  }

  find(id: number): Observable<Remark> {
    return this.httpService.find<Remark>('remarks', id);
  }

  put(model: Remark, id: number): Observable<Remark> {
    return this.httpService.put<Remark>('remarks', model, id);
  }

  delete(id: number): Observable<Remark> {
    return this.httpService.delete<Remark>('remarks', id);
  }
}
