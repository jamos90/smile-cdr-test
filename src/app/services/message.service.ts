import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: string = '';

  changeMessage( newMessage: any) {
    console.log('getting to change message funciton', newMessage);
    this.message = newMessage;
  }

  constructor() {};
}