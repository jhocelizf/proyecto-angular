import { Component, OnInit } from '@angular/core';
import { SalesService } from './sales.service';
import { ISale, ISaleForm } from './models';
import { FormControl, FormGroup } from '@angular/forms';
import { CoursesService } from '../courses/courses.service';
import { ICourse } from '../courses/models';
import { StudentsService } from '../students/students.service';
import { IStudent } from '../students/models';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss',
})
export class SalesComponent implements OnInit {
  sales: ISale[] = [];
  courses: ICourse[] = [];
  students: IStudent[] = [];

  isLoading = false;

  saleForm = new FormGroup<ISaleForm>({
    quantity: new FormControl(1),
    buyer: new FormControl(null),
    course: new FormControl(null),
  });

  constructor(
    private salesService: SalesService,
    private coursesService: CoursesService,
    private studentsService: StudentsService
  ) {}

  ngOnInit(): void {
    this.loadSales();
    this.loadCourses();
    this.loadStudents();
  }

  createSale() {
    this.salesService.createSales(this.saleForm.value).subscribe({
      next: (sales) => {
        console.log(sales);
      },
    });
  }

  loadStudents() {
    this.studentsService.getStudents().subscribe({
      next: (students) => {
        this.students = students;
      },
    });
  }

  loadCourses() {
    this.courses = this.coursesService.getCourses();
  }

  loadSales() {
    this.isLoading = true;
    this.salesService.getSales().subscribe({
      next: (sales) => {
        this.sales = sales;
      },
      error: () => {},
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
