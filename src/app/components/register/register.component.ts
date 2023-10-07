import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlOptions } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  isLoading: boolean = false
  msg: string = ""

  register: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^\w{8,}$/)]),
    rePassword: new FormControl(''),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
  }, { validators: [this.checkPassword] } as FormControlOptions)

  checkPassword(group: FormGroup): void {
    const password = group.get('password');
    const rePassword = group.get('rePassword')

    if (rePassword?.value == '') {
      rePassword?.setErrors({ required: true });
    }

    else if (password?.value != rePassword?.value) {
      rePassword?.setErrors({ mismatch: true });
    }
  }

  handleRegister(): void {
    this.isLoading = true
    if (this.register.valid) {
      this._AuthService.registerForm(this.register.value).subscribe({
        next: (response) => {
          if (response.message = "success") {
            this._Router.navigate(['/login'])
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
