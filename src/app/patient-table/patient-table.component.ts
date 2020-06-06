import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.scss']
})
export class PatientTableComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  patientsData: any = {};

  getData(): void {
    this.apiService.getPatients()
    .subscribe((data) => {
      this.patientsData = data;
      console.log(data);
    }) 
  }

  ngOnInit(): void {
    this.getData();
  }


}
