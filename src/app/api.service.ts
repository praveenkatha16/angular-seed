import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  getData() {
    return [
      { id: 1, name: 'Praveen' },
      { id: 2, name: 'Anand' },
      { id: 3, name: 'Kishore' },
    ];
  }
}
