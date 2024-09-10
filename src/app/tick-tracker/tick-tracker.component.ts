import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-tick-tracker',
  standalone: true,
  imports: [],
  templateUrl: './tick-tracker.component.html',
  styleUrl: './tick-tracker.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TickTrackerComponent {
  public tickCount = 0;

  constructor(private ngZone: NgZone, private http: HttpClient, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.trackZoneTicks();

    setTimeout(() => {
      console.log('setTimeout выполнен');
    }, 1000);

    setInterval(() => {
      console.log('setInterval выполнен');
    }, 2000);

    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(() => {
      console.log('HTTP запрос выполнен');
    });
  }

  trackZoneTicks() {
    this.ngZone.onStable.subscribe(() => {
      this.tickCount++;
      // this.cdr.markForCheck();
      console.log(`Тик №${this.tickCount}`);
    });
  }
}