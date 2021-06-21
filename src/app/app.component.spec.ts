import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertService } from './alert.service';
import { ApiService } from './api.service';
import { AppComponent } from './app.component';
import { DataService } from './data.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let service: jasmine.SpyObj<DataService>;
  let alertService: jasmine.SpyObj<AlertService>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    })
      .overrideProvider(DataService, {
        useValue: jasmine.createSpyObj<DataService>('DataService', ['init']),
      })
      .overrideProvider(AlertService, {
        useValue: jasmine.createSpyObj<AlertService>('AlertService', [
          'showAlert',
        ]),
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
    alertService = TestBed.inject(AlertService) as jasmine.SpyObj<AlertService>;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('init and showAlert should be called', () => {
    app.ngOnInit();
    expect(service.init).toHaveBeenCalled();
    expect(alertService.showAlert).toHaveBeenCalled();
  });

  // it('app data should be initialized', () => {
  //   const mockRes = [{ id: 1, name: 'Hello' }];
  //   service.getFilteredData.and.returnValue(mockRes);
  //   app.ngOnInit();
  //   expect(app.data).toEqual(mockRes);
  // });
});
