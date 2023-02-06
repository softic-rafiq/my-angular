import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  isLoggedIn = false;
  authBtn: any = 'Login';

  constructor(private authService: AuthService) {}
  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      console.log('dashboard');
      this.isLoggedIn = true;
    }
  }
}
