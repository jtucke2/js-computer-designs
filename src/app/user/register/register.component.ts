import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, merge } from 'rxjs';
import { map  } from 'rxjs/operators';

import { AuthService } from 'src/app/global/services/auth.service';
import { SnackbarService } from 'src/app/global/services/snackbar.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public minPwLength = 8;
  public errorMessage = '';
  public form: FormGroup = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email], this.validateEmail.bind(this)),
    password: new FormControl('',
      [
        Validators.required,
        Validators.minLength(this.minPwLength),
        this.validatePasswordComplexity as ValidatorFn
      ]
    ),
    password_confirm: new FormControl('', [Validators.required])
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private sbs: SnackbarService,
  ) { }

  ngOnInit() {
    merge(
      this.form.get('password').valueChanges,
      this.form.get('password_confirm').valueChanges
    )
    .subscribe(() => this.validatePasswordConfirm());
  }

  public registerSubmit() {
    this.authService.register(this.form.value);
    this.router.navigate(['/home']);
    this.sbs.openSnackbar('Registration Complete');
  }

  private validateEmail(emailCtrl: FormControl): Observable<any> {
    return this.authService.emailTaken(emailCtrl.value)
      .pipe(
        map((emailTaken: boolean) => emailTaken ? { emailTaken: true } : null)
      );
  }

  private validatePasswordComplexity(control: AbstractControl): ValidationErrors {
    if (control.errors && !control.errors.pw_complexity) {
      return;
    }

    const pw = control.value;
    if (!pw) {
      return null;
    }

    return pw.match(/\d/) && pw.match(/[a-z]/) && pw.match(/[A-Z]/) ? null : { pw_complexity: true };
  }

  private validatePasswordConfirm() {
    const control = this.form.get('password');
    const matchingControl = this.form.get('password_confirm');

    if (matchingControl.errors && !matchingControl.errors.pw_match) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ pw_match: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}
