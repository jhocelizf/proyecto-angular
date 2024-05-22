import { Component, OnInit } from '@angular/core';
import { SalesService } from './sales.service';
import { ISale, ISaleForm } from './models';
import { FormControl, FormGroup } from '@angular/forms';
import { CoursesService } from '../courses/courses.service';
import { ICourse } from '../courses/models';
import { StudentsService } from '../students/students.service';
import { IStudent } from '../students/models';
import { Store } from '@ngrx/store';
import {
  selectLoadingSales,
  selectSaleList,
  selectSalesError,
} from './store/sale.selectors';
import { SaleActions } from './store/sale.actions';
import { first, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss',
})
export class SalesComponent implements OnInit {
  courses: ICourse[] = [];
  students: IStudent[] = [];

  existsUnsavedChanges = false;

  saleForm = new FormGroup<ISaleForm>({
    quantity: new FormControl(1),
    buyer: new FormControl(null),
    course: new FormControl(null),
  });

  loadingSales$: Observable<boolean>;
  error$: Observable<unknown>;
  sales$: Observable<ISale[]>;

  constructor(
    private salesService: SalesService,
    private coursesService: CoursesService,
    private studentsService: StudentsService,
    private store: Store
  ) {
    this.loadingSales$ = this.store.select(selectLoadingSales);
    this.sales$ = this.store.select(selectSaleList);
    this.error$ = this.store.select(selectSalesError);
  }

  ngOnInit(): void {
    this.loadSales();
    this.loadCourses();
    this.loadStudents();
    this.subscribeToSaleFormChange();
  }

  subscribeToSaleFormChange(): void {
    this.saleForm.valueChanges.subscribe({
      next: (v) => {
        this.existsUnsavedChanges = true;
      },
    });
  }

  createSale() {
    this.salesService.createSales(this.saleForm.value).subscribe({
      next: (sales) => {
        console.log(sales);
      },
    });
  }

  loadStudents() {
    this.studentsService.getStudent().subscribe({
      next: (students) => {
        this.students = students;
      },
    });
  }

  loadCourses() {
    this.coursesService.getCourses().subscribe({
      next: (v) => (this.courses = v),
    })
  }

  loadSales() {
    this.store.dispatch(SaleActions.loadSales())
  }
}
