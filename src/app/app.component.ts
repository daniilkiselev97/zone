import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TickTrackerComponent } from './tick-tracker/tick-tracker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TickTrackerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zone';
}
