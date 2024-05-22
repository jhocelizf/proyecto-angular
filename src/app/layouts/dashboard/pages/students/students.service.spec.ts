import { TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { StudentsService } from './students.service';
import { environment } from '../../../../../environments/environment';
import { CreateUserPayload, IStudent } from './models';

describe('UsersService', () => {
    let studentsService: StudentsService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [StudentsService],
            imports: [HttpClientTestingModule],
        });

        studentsService = TestBed.inject(StudentsService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('getUsers debe realizar una paticion GET a {apiUrl}/users', () => {
        studentsService.getStudent().subscribe({
            next: (resp) => {
                expect(Array.isArray(resp)).toBeTrue();
            },
        });
        httpTestingController
            .expectOne({
                method: 'GET',
                url: environment.baseAPIURL + '/students',
            })
            .flush([]);
    });

    it('createUser debe ejecutar POST a {apiUrl}/students', () => {
        const payload: CreateUserPayload = {
            createdAt: new Date(),
            email: 'some@mail.com',
            firstName: 'TEST',
            lastName: 'TEST',
            role: 'ADMIN',
        };

        const mockResp: IStudent = {
            createdAt: new Date(),
            email: 'some@mail.com',
            name: 'TEST',
            lastName: 'TEST',
            role: 'ADMIN',
            id: 12312,
        };

        studentsService.createStudent(payload).subscribe((resp) => {
            expect(resp).toEqual(mockResp);
        });

        httpTestingController
            .expectOne({
                method: 'POST',
                url: environment.baseAPIURL + '/students',
            })
            .flush(mockResp);
    });
});
