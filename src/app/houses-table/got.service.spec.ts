import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { GotService } from './got.service';

describe('GotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [GotService]
    });
  });

  it('should be created', inject([GotService], (service: GotService) => {
    expect(service).toBeTruthy();
  }));
});
