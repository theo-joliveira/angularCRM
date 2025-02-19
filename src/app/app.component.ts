import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { DummyComponent } from './component/dummy/dummy.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'crm-root',
  imports: [RouterOutlet, MatToolbar, DummyComponent, RouterLink, RouterLinkActive, MatIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angularCRM';

  handle(test: string): void {
    console.log(test);
  }
}
