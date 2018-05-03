import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { GotHouse } from './got-house';

@Injectable()
export class GotService {

  private baseUrl: string = 'https://7gc5dwdtf3.execute-api.us-east-2.amazonaws.com/dev/';

  constructor(private http: HttpClient) { }

   getGotHouses(){
      return this.http.get<Array<GotHouse>>(`${this.baseUrl}got-houses`);
   }

}
