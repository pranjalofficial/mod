import { TestBed } from '@angular/core/testing';

import { MentorListService } from './mentor-list.service';

describe('MentorListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MentorListService = TestBed.get(MentorListService);
    expect(service).toBeTruthy();
  });
});
