import { Injectable } from '@angular/core';
import { ICourse } from './models';

@Injectable()
export class CoursesService {
  constructor() {}

  getCourses(): ICourse[] {
    return [
      {
        id: 1,
        name: 'desarrollo web',
        price: 1000,
      },
    ];
  }
}
