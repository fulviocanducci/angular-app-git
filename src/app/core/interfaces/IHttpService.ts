import { Observable } from 'rxjs';

export interface IHttpService<T> {
   get(): Observable<T[]>;
   post(model: T): Observable<T>;
   find(id: number): Observable<T>;
   put(model: T, id: number): Observable<T>;
   delete(id: number): Observable<T>;
}
