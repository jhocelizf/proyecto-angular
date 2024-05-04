import { Injectable } from '@angular/core';
import { IStudent, CreateUserPayload } from './models';
import { catchError, delay, first, Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class StudentsService {

  constructor(private httpClient: HttpClient) {}

  getStudents(): Observable<IStudent[]> {
    return this.httpClient.get<IStudent[]>(environment.baseAPIURL + '/students').pipe(
      catchError((err) => {
        console.log('error', err);
        return throwError(() => new Error('error'));
      })
    );
  }

  getStudentById(id: string): Observable<IStudent | undefined> {
    return this.httpClient.get<IStudent>(environment.baseAPIURL +'/students' + id)
  }

  
/*   getUserById(id: string): Observable<IUser | undefined> {
    return this.httpClient.get<IUser>(`${environment.baseAPIURL}/users/${id}`);
  }
 */
  createUser(payload: CreateUserPayload): Observable<IStudent> {
    return this.httpClient.post<IStudent>(
      `${environment.baseAPIURL}/students`,
      payload
    );
  }
}
