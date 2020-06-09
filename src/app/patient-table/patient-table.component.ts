import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service.service';
import { ErrorTextService } from '../services/error-text.service';
import  textValidators  from '../../utils/helpers/textValidationHelpers';

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
    const textIsValid = textValidators.allLanguageTextValidator(text.trim());
    if(!textIsValid) {
      this.errorText.setErrorText('Text input cannot contain non-alphabetic characters');
    }
    return textIsValid;
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
    this.buttonActive = false;
    if(!this.searchDate || this.searchName.length === 0) {
      this.errorText.setErrorText('Search criteria must not be empty');
      this.buttonActive = true;
      return;
    }
    const dateIsValid = this.checkDateInput(this.searchDate)
    const textIsValid = this.checkTextInput(this.searchName);
    if(textIsValid && dateIsValid ) {
      this.apiService.searchPatients(this.searchName.trim(), this.searchDate).subscribe((data) => {
        this.patientsData = data;
        this.buttonActive = true;
      })
    }
    else {
      this.buttonActive = true;
    }
  }

  getData(): void{
    this.errorText.clear();
    this.buttonActive = false;
    this.apiService.getPatientsWithSpecificBirthdates('1960-01-01','1964-12-31')
    .subscribe((data) => {
      this.patientsData = data;
      this.buttonActive = true;
    })
  }

  ngOnInit(): void {
    this.getData();
  }
}
