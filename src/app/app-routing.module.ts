import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { AuthComponent } from './layouts/auth/auth.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () =>
      import ('./layouts/dashboard/dashboard.module') .then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: '**',
    redirectTo: '/auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
