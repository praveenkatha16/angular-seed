import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class DataService {
  constructor(private apiService: ApiService) {}

  init() {}

  getData() {
    return this.apiService.getData();
  }

  // getFilteredData() {
  //   return this.apiService.getData().filter((x) => x.id < 5);
  // }
}
