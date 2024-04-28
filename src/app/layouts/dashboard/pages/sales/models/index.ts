import { FormControl } from '@angular/forms';
import { ICourse } from '../../courses/models';
import { IStudent } from '../../students/models';

export interface ISale {
  id: number;
  course: ICourse ;
  buyer: IStudent;
  quantity: number;
}

export interface ISaleForm {
  quantity: FormControl<number | null>;
  buyer: FormControl<IStudent | null>;
  course: FormControl<ICourse | null>;
}

export interface ICreateSaleData {
  course?: ICourse | null;
  buyer?: IStudent | null;
  quantity?: number | null;
}