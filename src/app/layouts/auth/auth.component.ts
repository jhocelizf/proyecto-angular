import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.services';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnDestroy, OnInit {
    authUserChangeSubscription?: Subscription;

    loginForm: FormGroup;

    constructor(
      private authService: AuthService,
      private router: Router,
      private fb: FormBuilder
    ) {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      });
    }
  
    ngOnInit(): void {}
  
    ngOnDestroy(): void {}
  
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
