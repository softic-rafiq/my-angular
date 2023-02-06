import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/auth/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLoggedIn = false;
  userForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      mobile: ['', Validators.required],
      password: ['', Validators.required],
    });

    if (this.authService.isLoggedIn()) {
      this.isLoggedIn = true;
    }
  }
  loginUser(): void {
    console.log('Add user');
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.authService.login(this.userForm.value).subscribe({
        next: (resp) => {
          if (resp?.data?.loginUser?.token) {
            this.toastr.success('Successfully loggedin');
            this.tokenService.setToken(resp?.data?.loginUser?.token);
            this.router.navigate(['/dashboard']);
          }
          console.log('succes', resp);
          this.userForm.reset();
          // this.userForm.close('save');
        },
        error: (err) => {
          alert('Something wrong!');
        },
      });
    }
  }
}
