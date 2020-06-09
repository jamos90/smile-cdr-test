import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PatientTableComponent } from './patient-table.component';
import { ApiService } from '../services/api-service.service';

describe('PatientTableComponent', () => {
  let component: PatientTableComponent;
  let fixture: ComponentFixture<PatientTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [ PatientTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be created with an empty data object', () => {
    expect(component.patientsData).toEqual({});
  })

  it('should verify if a data is in the correct format', () => {
    const dateCheckTrue = component.checkDateInput('2020-04-03');
    const dateCheckFalse = component.checkDateInput('20222-04-34');
    expect(dateCheckTrue).toBe(true);
    expect(dateCheckFalse).toBe(false);
  })


});
