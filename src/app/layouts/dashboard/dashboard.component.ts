import { Component } from '@angular/core';
import { IStudent } from './pages/students/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  showFiller = false;

  isMobile(): boolean {
    return window.innerWidth <= 280;
  }


}
