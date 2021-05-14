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
    // this.URL = 'https://reqres.in/api123';
  }

  getUsers() {
    return this.http.get(`${this.URL}/users?per_page=10&delay=3`).pipe(
      map(res => res['data'])
    );
  }

  getUser(id: number) {
    return this.http.get(`${this.URL}/users/${id}`).pipe(
      map(res => res['data'])
    );
  }
}
