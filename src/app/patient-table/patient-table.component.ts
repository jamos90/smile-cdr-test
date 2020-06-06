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

  buttonActive: boolean = true;

  errorText:  string = '';

  checkTextInput(text: string) {
    console.log(text.length);
    for(let i = 0; i < text.length; i ++ ) {
      let code = text.charCodeAt(i);
      if(!(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
          this.errorText = 'Text input cannot contain non-alphabetic characters'
          return false;
      }
    }
    this.errorText = "";
    return true;
  }

  searchResources() {
    this.buttonActive = false;
    console.log(this.searchName);
    const textIsValid = this.checkTextInput(this.searchName);
    console.log(textIsValid);
    if(textIsValid) {
      this.apiService.searchPatients(this.searchName).subscribe((data) => {
        this.patientsData = data;
        this.buttonActive = true;
      })
    }
    else {
      console.log('non valid input');
      this.buttonActive = true;
    }
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
