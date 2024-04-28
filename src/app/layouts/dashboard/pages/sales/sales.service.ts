import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ICreateSaleData, ISale } from './models';

let SALES_DB: ISale[] = [
{
    id: 1,
    buyer: {
      id: 1,
      createdAt: new Date(),
      email: 'student@mail.com',
      name: 'TEST',
      lastName: 'TEST',
      role: 'STUDENT',
    },
    course: {
      id: 1,
      name: 'DESARROLLO WEB',
      price: 1000,
    },
    quantity: 2,
  },
];

@Injectable({ providedIn: 'root' })
export class SalesService {

constructor() {
    // private httpClient: HttpClient
    // this.httpClient.get('http://myapi.com/users')
  }

getSales(): Observable<ISale[]> {
    return of(SALES_DB).pipe(delay(1500));
}

createSales(data: ICreateSaleData) {
    if (data.buyer && data.course && data.quantity) {
        const newSale: ISale = {
        id: new Date().getTime(),
        buyer: data.buyer,
        course: data.course,
        quantity: data.quantity,
    };
      SALES_DB.push(newSale);
    }
    return of(SALES_DB);
}

deleteSale(id: number) {
    return of(SALES_DB.filter((sale) => sale.id != id));
}

    updateSale(id: number, data: ISale) {
    return of(
      SALES_DB.map((sale) => (sale.id === id ? { ...sale, ...data } : sale))
    );
}
}