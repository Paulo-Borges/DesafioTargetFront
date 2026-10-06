import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionsPage } from './commissions.page';

describe('CommissionsPage', () => {
  let component: CommissionsPage;
  let fixture: ComponentFixture<CommissionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommissionsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CommissionsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
