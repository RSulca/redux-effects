import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL: string;

  constructor(private http: HttpClient) {
    this.URL = 'https://reqres.in/api';
  }

  getUsers() {
    return this.http.get(`${this.URL}/users?per_page=10`).pipe(
      map(res => res['data'])
    );
  }

}
