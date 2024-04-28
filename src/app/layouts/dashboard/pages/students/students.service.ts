import { Injectable } from '@angular/core';
import { IStudent } from './models';
import { catchError, delay, first, Observable, of, throwError } from 'rxjs';

const STUDENTS_DB: IStudent[] = [
  {
    id: 1,
    name: 'fer',
    lastName: 'marques',
    email: 'fer@test.com',
    role: 'ADMIN',
    createdAt: new Date(),
  },
  {
    id: 2,
    name: 'Sasana',
    lastName: 'sanchez',
    email: 'sasi@test.com',
    role: 'STUDENT',
    createdAt: new Date(),
  },
];

@Injectable({ providedIn: 'root' })
export class StudentsService {
  getStudents(): Observable<IStudent[]> {
    return of(STUDENTS_DB).pipe(delay(1500));
    // return throwError(() => new Error('Error al cargar los usuarios')).pipe(
    //   catchError((err) => of(err))
    // );
  }

  getStudentById(id: number): Observable<IStudent | undefined> {
    return of(STUDENTS_DB.find((el) => el.id === id)).pipe(delay(1500));
  }
}
