import { TestBed } from '@angular/core/testing';

import { ErrorTextService } from './error-text.service';

describe('MessageService', () => {
  let service: ErrorTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created with no messages', () => {
    expect(service.errorText.length).toBe(0);
  });

  it('should be able to add messages', () => {
    service.setErrorText('Hello world');
    expect(service.errorText).toEqual('Hello world');
  });

  it('should be able to clear messages', () => {
    service.setErrorText('Hello world');
    service.clear();
    expect(service.errorText).toBe("");
  })

});