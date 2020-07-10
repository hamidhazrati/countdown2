import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownComponent } from './countdown.component';
import { HttpClientModule } from '@angular/common/http';
import { CountdownDataService } from 'src/services/countdown-data.service';
import { HeadingComponent } from '../heading/heading.component';
import { FootingComponent } from '../footing/footing.component';

describe('CountdownComponent', () => {
  let component: CountdownComponent;
  let fixture: ComponentFixture<CountdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CountdownDataService],
      declarations: [
        CountdownComponent,
        HeadingComponent,
        FootingComponent
       ]
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CountdownComponent', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit() should call to read JSON ', () => {
    let spy = spyOn(component, 'getJSON').and.returnValue(false);
    component.ngOnInit();
    expect(component.getJSON).toHaveBeenCalled();
  });

  it('coposed page TODO!!! ...', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain(''); // TODO
  });

});
