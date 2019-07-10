import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService, LoginReturnData } from '../../global/services/auth.service';
import { UserService } from '../../global/services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  public errorMessage = '';

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public loginSubmit() {
    const { email, password } = this.form.value;
    const user = this.userService.userDb.find(u => u.email === email);
    if (!user) {
      this.errorMessage = 'Email not found';
    } else if (user.password !== password) {
      this.errorMessage = 'Incorrect password';
    } else {
      this.userService.setUser(user);
      this.router.navigate(['home']);
    }
  }

}
