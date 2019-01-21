import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }
  private elapsedTime = 0;
  private interval;
  public startTimer() {
    this.interval = setInterval(() => {
      this.elapsedTime++;
    }, 1000);
  }
  public stopTimer() {
    clearInterval(this.interval);
  }
  public resetTimer() {
    this.elapsedTime = 0;
  }
  public getTime(): number {
    return this.elapsedTime;
  }
}
