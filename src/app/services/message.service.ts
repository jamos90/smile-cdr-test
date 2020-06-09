import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: string = '';

  changeMessage( newMessage: any) {
    this.message = newMessage;
  }

  constructor() {};
}