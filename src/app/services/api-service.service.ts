import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPatients() {
    return this.httpClient.get(environment.queryURI + '/Patient',
      { headers: this.getHeaders() });
  }

  searchPatients(name: string, date: string) {
    return this.httpClient.get(environment.queryURI + `/Patient/?name=${name}&birthdate=${date}`,
    {headers: this.getHeaders() });
  }

  getPatientsWithSpecificBirthdates (date1, date2) {
    return this.httpClient.get(environment.queryURI + `/Patient/?birthdate=ge${date1}&birthdate=le${date2}&_sort=birthdate`,
    {headers: this.getHeaders() });
  }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/fhir+json'
    });
    return headers;
  }
}


