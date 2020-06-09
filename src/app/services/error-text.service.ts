import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ErrorTextService {
  errorText: string = "";

  setErrorText(text: any) {
    this.errorText = text;
  }

  clear() {
    this.errorText = '';
  }

  constructor () {};
}