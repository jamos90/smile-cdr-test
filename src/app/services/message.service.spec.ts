import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created with no message', () => {
    expect(service.message.length).toEqual(0);
  });

  it('should be able to add a message', () => {
    service.changeMessage('Hello world');
    expect(service.message).toBe('Hello world');
  });
});