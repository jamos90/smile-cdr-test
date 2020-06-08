import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service.service';
import { ErrorTextService } from '../services/error-text.service';

@Component({
  selector: 'app-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.scss']
})
export class PatientTableComponent implements OnInit {

  constructor(private apiService: ApiService, private errorText: ErrorTextService) { }

  patientsData: any = {};

  searchName: string = '';

  searchDate: any;

  buttonActive: boolean = true;

  checkTextInput(text: string) {
    console.log(text.length);
    for(let i = 0; i < text.length; i ++ ) {
      let code = text.charCodeAt(i);
      if(!(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
          this.errorText.setErrorText('Text input cannot contain non-alphabetic characters');
          return false;
      }
    }
    this.errorText.clear()
    return true;
  }

  checkDateInput(date: any) {
    const splitDate = date.split('-');
    if(splitDate[0].length > 4) {
      this.errorText.setErrorText('Date has to be valid')
      return false;
    }
    this.errorText.clear()
    return true;
  }

  searchResources() {
    if(this.searchDate === '' || this.searchName === '') {
      this.errorText.setErrorText('Search criteria must not be empty');
      this.buttonActive = true;
      return;
    }
    this.buttonActive = false;
    this.checkDateInput(this.searchDate)
    const textIsValid = this.checkTextInput(this.searchName);
    if(textIsValid) {
      this.apiService.searchPatients(this.searchName, this.searchDate).subscribe((data) => {
        this.patientsData = data;
        this.buttonActive = true;
      })
    }
    else {
      console.log('invalid input');
      this.buttonActive = true;
    }
  }


  getData(): void{
    this.errorText.clear();
    this.buttonActive = false;
    this.apiService.getPatientsWithSpecificBirthdates('1960-01-01','1964-12-31')
    .subscribe((data) => {
      this.patientsData = data;
      // this.sortData();
      console.log(data);
      console.log(new Date('1961-03-22'))
      this.buttonActive = true;
    })
  }

  ngOnInit(): void {
    this.getData();
  }


}
