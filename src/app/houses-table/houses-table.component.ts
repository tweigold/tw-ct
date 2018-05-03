import { Component, OnInit } from '@angular/core';

import { GotService } from './got.service';
import { GotHouse } from './got-house';


@Component({
  selector: 'app-houses-table',
  templateUrl: './houses-table.component.html',
  styleUrls: ['./houses-table.component.css']
})
export class HousesTableComponent implements OnInit {

  houses: Array<GotHouse> = new Array<GotHouse>();  

  constructor(private gotService: GotService) { }


  ngOnInit(): void {

    this.gotService.getGotHouses()
      .subscribe(data => { this.houses = data}, 
        error => console.log(error) 
    );

  }

}
