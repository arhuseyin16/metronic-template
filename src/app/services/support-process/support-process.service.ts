import { Injectable } from '@angular/core';
import { BaseService } from './../base.servie';

@Injectable()
export class SupportService extends BaseService {
  getSupportData() {
    const url = `${this.baseUrl}Test`;
    return this.getReq(url);
  }

  saveSupport(test) {
    const url = `${this.baseUrl}Mest`;
    return this.postReq(url, { test });
  }

  getFromPlaceHolder() {
    return this.getReqTest('https://jsonplaceholder.typicode.com/posts');
  }
}
