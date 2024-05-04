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

  export interface CreateUserPayload {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    role: UserRole | null;
    createdAt: Date | null;
  }

/* alternarAprobado(): void {
    this.aprobado = !this.aprobado;
}
} */