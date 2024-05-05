import { Component, OnDestroy, OnInit } from '@angular/core';
import { IStudent } from './pages/students/models';
import { AuthService } from '../../core/services/auth.services';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  showFiller = false;

  authStudent$: Observable <IStudent | null>;

  authUserSinPipe: IStudent | null = null;
  authStudentubscription?: Subscription;


  constructor(private authService: AuthService, private router: Router){
    this.authStudent$ = this.authService.authStudent$;
  }

  ngOnDestroy(): void {
    this.authStudentubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.authStudentubscription = this.authService.authStudent$.subscribe({
      next: (student) => {
        this.authUserSinPipe = student;
      },
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['auth']);
  }

  isMobile(): boolean {
    return window.innerWidth <= 280;
  }
}
