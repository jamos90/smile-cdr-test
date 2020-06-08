import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ErrorTextService {
  errorText: string = "";

  setErrorText(text: any) {
    this.errorText = text;
    console.log('error text', this.errorText)
  }

  clear() {
    this.errorText = '';
  }

  constructor () {};
}