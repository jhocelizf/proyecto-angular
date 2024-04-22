import { Component, OnDestroy, OnInit } from '@angular/core';
import { IStudent } from './pages/students/models';
import { AuthService } from '../../core/services/auth.services';
import { Observable, Subscription } from 'rxjs';

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


  constructor(private authService: AuthService){
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

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }


  isMobile(): boolean {
    return window.innerWidth <= 280;
  }


}
