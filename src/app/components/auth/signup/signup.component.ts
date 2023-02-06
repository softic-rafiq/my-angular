import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  userForm!: FormGroup;
  isLoggedIn = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.isLoggedIn = true;
    }
    this.userForm = this.formBuilder.group({
      mobile: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  registerUser(): void {
    console.log('Add user');
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.authService.registerUser(this.userForm.value).subscribe({
        next: (resp) => {
          console.log('succes', resp);
          if (resp.data) {
            this.router.navigate(['/login']);
          }
          alert('User added successfully');
          this.userForm.reset();
          // this.userForm.close('save');
        },
        error: (err) => {
          alert('Something wromng!');
        },
      });
    }
  }
}
