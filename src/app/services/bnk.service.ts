import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from '../../../node_modules/rxjs';
import { Member } from '../models/member';
import { Feed } from '../models/feed';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BnkService {

  constructor(private http:HttpClient) { }

  list(): Observable<Member[]>{
      return this.http.get<Member[]>(`${environment.api_url}/bnk/members`);
  }

  instagram(id: string): Observable<Feed>{
      return this.http.get<Feed>(`${environment.instagram_api_url}${id}`);
  }

  profile(id: string): Observable<Member>{
      return this.http.get<Member>(`${environment.api_url}/bnk/members/${id}`);
  }
}