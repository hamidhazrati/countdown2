import { Component, OnInit } from '@angular/core';
import { CountdownDataService } from 'src/services/countdown-data.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  countdownData = {}
  claimed = false;
  static timer = 0;
  httpError = false;

  constructor(private dataService : CountdownDataService) {
  }
  getJSON(){
    this.dataService.getJSON().subscribe(
      data => {
        this.countdownData = data;
        CountdownComponent.timer = data.timeInSeconds;
        CountdownComponent.updateTimer();
      },
      err => {
              this.httpError = true;
              console.log('HTTP Error', err)
      },
      () => {
        console.log('+++HTTP request completed.');
      }
    );
  }
  static updateTimer()
  {
    if ( CountdownComponent.timer>0 ) {
      setTimeout(function(){
        CountdownComponent.timer--;
        CountdownComponent.updateTimer()}, 1000);
    }
  }
  get timer() {
    return new Date(CountdownComponent.timer*1000);
  }

  ngOnInit() {
    this.getJSON();
  }

}
