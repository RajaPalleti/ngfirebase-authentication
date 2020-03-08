import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FirstService {
  public apiUrl = 'https://myproject-1d357.firebaseio.com/myproject.json';
  constructor(private _httpClient: HttpClient) { }
  getFirstData(data) {
    return this._httpClient.post(this.apiUrl, data).pipe(map(res => res));
  }
  getItemList() {
    return this._httpClient.get(this.apiUrl).pipe(map(res => res));
  }
}
