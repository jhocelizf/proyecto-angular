export interface ICourse {
    id: number;
    name: string;
    price: number;
  }
  
export interface ICreateCoursePayload {
  name: string;
  price: number;
}