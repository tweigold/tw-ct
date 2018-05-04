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
      },       
       err => console.error('Request failed.')
      );
  }
}
