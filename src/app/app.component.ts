import { Component } from '@angular/core';
import { Iso8583DisplayComponent } from './iso8583-display/iso8583-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Iso8583DisplayComponent],
  template: '<app-iso8583-display></app-iso8583-display>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iso8583-frontend';
}
