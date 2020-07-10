import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CountdownDataService } from 'src/services/countdown-data.service';
import { HeadingComponent } from 'src/app/components/heading/heading.component';
import { FootingComponent } from 'src/app/components/footing/footing.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent, HeadingComponent, FootingComponent
      ],
    }).compileComponents();
  }));
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [CountdownDataService]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'heading'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('coundown');
  });

  it('should render title in a <heading> tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('heading').textContent).toContain('');
  });
});
