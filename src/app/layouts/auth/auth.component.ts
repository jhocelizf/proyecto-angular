import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.services';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnDestroy, OnInit {
    authUserChangeSubscription?: Subscription;
  
    constructor(private authService: AuthService, private router: Router) {}
  
    ngOnInit(): void {
      this.subscribeToAuthUserChange();
    }
  
    ngOnDestroy(): void {
      this.authUserChangeSubscription?.unsubscribe();
    }
  
    subscribeToAuthUserChange(): void {
      this.authUserChangeSubscription = this.authService.authStudent$.subscribe({
        next: (authStudent) => {
          if (authStudent != null) {
            this.router.navigate(['dashboard', 'home']);
          }
        },
      });
    }
  
    login() {
      this.authService.login();
    }

}
