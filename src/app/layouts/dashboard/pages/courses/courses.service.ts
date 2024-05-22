import { Injectable } from '@angular/core';
import { ICourse } from './models';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  getCourses(): Observable<ICourse[]>{
    return this.httpClient.get<ICourse[]>(
      environment.baseAPIURL + '/courses'
    )
  }}
