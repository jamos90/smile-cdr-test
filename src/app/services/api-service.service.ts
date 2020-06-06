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

  searchPatients(name: string) {
    return this.httpClient.get(environment.queryURI + `/Patient/?name=${name}`,
    {headers: this.getHeaders() });
  }

  // getPatientsSpecificDates () {
  //   let params = new HttpParams().set
    // return this.httpClient.get('test');
  // }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/fhir+json'
    });
    return headers;
  }
}


