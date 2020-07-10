
import { async, TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule} from '@angular/common/http';
import { CountdownDataService } from './countdown-data.service';


describe('CountdownDataService', () => {
  let service: CountdownDataService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CountdownDataService,HttpTestingController  ]
    }).compileComponents();

    service = TestBed.get(CountdownDataService);
    httpMock = TestBed.get(HttpTestingController);

  }));

  it('should be created', () => {
    const service: CountdownDataService = TestBed.get(CountdownDataService);
    expect(service).toBeTruthy();
  });


});
