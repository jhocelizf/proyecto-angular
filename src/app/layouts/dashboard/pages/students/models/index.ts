export type UserRole = 'ADMIN' | 'STUDENT';

export interface IStudent {
    id: number;
    name: string;
    lastName: string;
    email: string;
    role: UserRole;
    createdAt: Date;
}

export class Student implements IStudent {
    constructor(
      public id: number,
      public name: string,
      public lastName: string,
      public email: string,
      public aprobado: boolean,
      public  role: UserRole,
      public createdAt: Date
  ) {}}



/* alternarAprobado(): void {
    this.aprobado = !this.aprobado;
}
} */