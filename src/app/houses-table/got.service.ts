import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import { GotHouse } from './got-house';

@Injectable()
export class GotService {  

  constructor(private http: HttpClient) { }

   getGotHouses():Observable<Array<GotHouse>>{
      return this.http.get<Array<GotHouse>>(`${environment.serviceUrl}got-houses`);
   }

}
