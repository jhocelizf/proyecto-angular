import { Component, Inject, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { ICourse } from './models';
import { API_URL, COURSES, RANDOM_NUMBER } from './courses.module';
import { AlertsService } from '../../../../core/services/alerts.service';
import { StudentsService } from '../students/students.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  constructor(
    private coursesService: CoursesService,
    @Inject(API_URL) private apiUrl: string,
    @Inject(RANDOM_NUMBER) private randomNumber: number,
    @Inject(COURSES) public products: ICourse[],
    private alertsService: AlertsService,
    private studentsService: StudentsService
  ) {
    console.log(this.apiUrl);
    console.log('random number: ', this.randomNumber);

    this.alertsService.notifier$.subscribe({
      next: (message) => console.log(message),
    });
  }

  ngOnInit(): void {

}}
