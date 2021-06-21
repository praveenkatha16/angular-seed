import { Component } from '@angular/core';
import { DataService } from './data.service';
import { AlertService } from './alert.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [DataService],
})
export class AppComponent {
  data: any[] = [];
  constructor(
    private dataService: DataService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.alertService.showAlert();
    this.dataService.init();
    // this.data = this.dataService.getFilteredData();
  }
}
