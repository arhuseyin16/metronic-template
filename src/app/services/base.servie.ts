import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
@Injectable()
export class BaseService {
  constructor( @Inject('baseUrl') public baseUrl, private http: HttpClient) {}

  postReq(url, data) {
    return this.http.post<any>(url, data, {
      headers: new HttpHeaders({
        Authorization: this.getAuthToken(),
      }),
    });
  }

  getReq(url, params?) {
    const headers = new HttpHeaders({
      Authorization: this.getAuthToken(),
    })
    const options = params ? {params, headers} : {headers};
    return this.http.get<any>(url, options);
  }

  getReqTest(url) {
    return this.http.get<any>(url);
  }

  private getAuthToken() {
    return localStorage.getItem('token');
  }
}