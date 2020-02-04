import { TestBed } from '@angular/core/testing';

import { NewclienteService } from './newcliente.service';

describe('NewclienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewclienteService = TestBed.get(NewclienteService);
    expect(service).toBeTruthy();
  });
});
