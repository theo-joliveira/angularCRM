import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HelpComponent } from '../component/help/help.component';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

function checkPassword(c: AbstractControl): ValidationErrors | null {
  if (c.value.length < 5) {
    return {
      checkPassword: 'Error controle password'
    };
  }
  return null;
}

@Component({
  selector: 'crm-login',
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, HelpComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private readonly authent = inject(AuthenticationService);
  private readonly router = inject(Router);

  protected loginForm = new FormGroup({
    login: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
      nonNullable: true,
    } ),


    password: new FormControl('', {
      validators: [Validators.required, checkPassword],
      nonNullable: true,
    }),
  });


  protected onSubmit(): void {
    console.log('submitted');
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      const {login, password} = this.loginForm.getRawValue();
      const res = this.authent.authentUser(login, password);
      console.log(res, 'from service');
    } else {
      console.log(this.loginForm.controls.password.errors);
    }
    this.router.navigate(['/home']);
  }
}