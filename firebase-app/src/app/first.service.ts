import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirstService {
  apiUrl = 'https://myproject-1d357.firebaseio.com/';
  constructor(private httpClient: HttpClient) {

  }
  // getFirstData(payload) {
  //   // const payload = {};
  //   // return this.httpClient.post(this.apiUrl, payload).map(res => {
  //   //   console.log('res', res);
  //   // });
  //   return this.httpClient.post(this.apiUrl, payload).subscribe(res => {
  //   });

  // }
}
