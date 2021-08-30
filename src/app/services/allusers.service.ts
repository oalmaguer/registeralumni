import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/users';

@Injectable({
  providedIn: 'root'
})
export class AllUsersService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${baseUrl}/findall`);
  }

  create(data) {
    return this.http.post(`${baseUrl}/create`, data);
  }

}