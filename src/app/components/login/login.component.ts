import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) { }

  isLoading: boolean = false
  msg: string = ""

  login: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^\w{8,}$/)]),
  })

  handleLogin(): void {
    this.isLoading = true
    if (this.login.valid) {
      this._AuthService.loginForm(this.login.value).subscribe({
        next: (response) => {
          if (response.message = "success") {
            localStorage.setItem('token',response.token)
            this._Router.navigate(['/home'])
          }
          this.isLoading = false
        },
        error: (err) => {
          this.isLoading = false
          this.msg = err.error.message
        }
      })
    }
  }
}
