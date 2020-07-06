import { TestBed } from '@angular/core/testing';

import { AngularMaterialService } from './angular-material.service';

describe('AngularMaterialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularMaterialService = TestBed.get(AngularMaterialService);
    expect(service).toBeTruthy();
  });
});
