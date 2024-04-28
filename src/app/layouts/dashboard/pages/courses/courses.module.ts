import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';


export const API_URL = new InjectionToken('API_URL');
export const RANDOM_NUMBER = new InjectionToken('RANDOM_NUMBER');
export const COURSES = new InjectionToken('COURSES');

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
