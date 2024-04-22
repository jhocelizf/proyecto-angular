/* este servicio mantiene la sesion de usuario (en este caso los estudiantess) */

import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IStudent } from "../../layouts/dashboard/pages/students/models";

@Injectable({ providedIn : "root"})
export class AuthService {

    private _authStudent$ = new BehaviorSubject<IStudent | null>(null);
    public authStudent$ = this._authStudent$.asObservable();


    login(): void {
        this._authStudent$.next({
            id: 1,
            createdAt: new Date(),
            email: 'email@mail.com',
            name: 'genio',
            lastName: 'son',
            role: 'ADMIN',
        });

}

logout(): void {
    this._authStudent$.next(null);
}

}