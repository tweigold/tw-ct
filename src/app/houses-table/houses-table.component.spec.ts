import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { GotService } from './got.service';
import { HousesTableComponent } from './houses-table.component';
import { GotHouse } from './got-house';

describe('HousesTableComponent', () => {
  let component: HousesTableComponent;
  let fixture: ComponentFixture<HousesTableComponent>;
  let gotServiceSpy: jasmine.SpyObj<GotService>;
  
  beforeEach((() => {
    const injectedGotSpy = jasmine.createSpyObj('GotService', ['getGotHouses']);

    TestBed.configureTestingModule({
      imports: [HttpClientModule, Ng2SearchPipeModule, FormsModule],
      declarations: [ HousesTableComponent ],
      providers: [ { provide: GotService, useValue: injectedGotSpy } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesTableComponent);
    component = fixture.componentInstance;  
    gotServiceSpy = TestBed.get(GotService);
      
  });

  it('should create', () => {
    gotServiceSpy.getGotHouses.and.returnValue(Observable.of(gotHouses));
    expect(component).toBeTruthy();
  });

  it('ngOnInit', () =>{
    gotServiceSpy.getGotHouses.calls.reset();
    gotServiceSpy.getGotHouses.and.returnValue(Observable.of(gotHouses));
    
    component.ngOnInit()
    
    expect(gotServiceSpy.getGotHouses.calls.count()).toBe(1);
    expect(component.houses[0].name).toEqual('House Algood');

  });

  it('sort by name ascending', () =>{
    
    component.houses = gotHouses;

    component.sort(true, 'name')
    
    expect(component.houses[0].name).toEqual('House Algood');
  });

  it('sort by name descending', () =>{
    component.houses = gotHouses;
    
    component.sort(false, 'name')
       
    expect(component.houses[0].name).toEqual('House Umber');
  });

});

const gotHouses = [
  new GotHouse('House Stark','The North', 'Direwolf', 'Winter is coming.'),
  new GotHouse('House Algood','The Westerlands','Crossed Swords', ''),
  new GotHouse('House Umber','The North','Two Ravens', '')
  ];
