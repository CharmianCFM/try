import { Headers } from '@angular/http';

export class ApiService {
  getUrl(): string {
    return 'http://localhost:8080/StartHotel';
  }
  getHeaders(): Headers {
    return new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'});
  }
}
