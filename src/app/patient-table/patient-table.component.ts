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

  searchName: string = '';

  searchResources() {
    console.log('getting to search recources function');
    console.log(this.searchName);
    this.apiService.searchPatients(this.searchName).subscribe((data) => {
      this.patientsData = data;
    })
  }

  sortData(): void {
    console.log('sorting data??', this.patientsData);
    const sortedPatientData = this.patientsData.entry.sort((a,b)=> {
      return a.resource.birthdate - b.resource.birthdate
    })

    this.patientsData = sortedPatientData;
  }


  getData(): void {
    this.apiService.getPatients()
    .subscribe((data) => {
      this.patientsData = data;
      // this.sortData();
      console.log(data);
    })
  }

  ngOnInit(): void {
    this.getData();
  }


}
