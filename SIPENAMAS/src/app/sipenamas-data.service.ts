import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Penelitian } from './penelitian/penelitian.component';

@Injectable({
  providedIn: 'root'
})
export class SipenamasDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api';

  public getListPenelitian(): Promise<Penelitian[]> {
    const url: string = `${this.apiBaseUrl}/penelitian`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Penelitian)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('terjadi kesalahan dalam pembuatan nasi goreng', error);
    return Promise.reject(error.message || error);
  }
  //public getDataPenelitian(): Promise
}
