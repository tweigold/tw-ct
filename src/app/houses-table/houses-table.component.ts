import { Component, OnInit } from '@angular/core';

import { GotService } from './got.service';
import { GotHouse } from './got-house';


@Component({
  selector: 'app-houses-table',
  templateUrl: './houses-table.component.html',
  styleUrls: ['./houses-table.component.scss']
})
export class HousesTableComponent implements OnInit {

  houses = new Array<GotHouse>();

  constructor(private gotService: GotService) { }


  ngOnInit(): void {

    this.gotService.getGotHouses()
      .subscribe((data) => {
        this.houses = data
        this.sort(true, 'name');
      },       
       err => console.error('Request failed.')
      );
  }

  sort(asc: boolean, field: string):void {
    this.houses.sort((obj1:GotHouse, obj2:GotHouse): number =>{
      let result : number = 0;
      if(obj1[field] < obj2[field]){
        result = -1;
      }

      if(obj1[field] > obj2[field]){
        result = 1;
      }

      if(!asc){
        result = result * -1;
      }

      return result;

    })
  }
}
