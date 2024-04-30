import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkipperService {
  strapiUrl = 'http://localhost:1666/api';

  constructor(private http: HttpClient) { }

  getSkippers() {
    return this.http.get(`${this.strapiUrl}/skippers?populate=*`);
  }

  getSkipper(id: number) {
    return this.http.get(`${this.strapiUrl}/skippers/${id}?populate=*`);
  }
}
