import { Component } from '@angular/core';
import { IStudent } from './models';
import { MatDialog } from '@angular/material/dialog';
import {StudentDialogComponent} from  './components/student-dialog/student-dialog.component';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'lastName',
    'email',
    'role',
    'createdAt',
  ];

  students: IStudent[] = [
    {
      id: 1,
      name: 'Carlos',
      lastName: 'Martinez',
      email: 'car@test.com',
      role: 'ADMIN',
      createdAt: new Date(),
    },
    {
      id: 2,
      name: 'Sofia',
      lastName: 'Perez',
      email: 'sofi@test.com',
      role: 'STUDENT',
      createdAt: new Date(),
    },
  ];

  constructor(private matDialog: MatDialog) {}

  openDialog(editingUser?: IStudent): void {
    this.matDialog
      .open(StudentDialogComponent, {
        data: editingUser,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            if (editingUser) {
              // ACTUALIZAR EL USUARIO EN EL ARRAY
              this.students = this.students.map((u) =>
                u.id === editingUser.id ? { ...u, ...result } : u
              );
            } else {
              // LOGICA DE CREAR EL USUARIO
              result.id = new Date().getTime().toString().substring(0, 3);
              result.createAt = new Date();
              this.students = [...this.students, result];
            }
          }
        },
      });
  }

  onDeleteUser(id: number): void {
    if (confirm('Esta seguro?')) {
      this.students = this.students.filter((u) => u.id != id);
    }
  }

}
