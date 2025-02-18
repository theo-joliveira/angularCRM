import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbar } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DummyComponent } from './component/dummy/dummy.component';

@Component({
  selector: 'crm-root',
  imports: [RouterOutlet, LoginComponent, MatToolbar, DummyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angularCRM';

  handle(test: string): void {
    console.log(test);
  }
}
