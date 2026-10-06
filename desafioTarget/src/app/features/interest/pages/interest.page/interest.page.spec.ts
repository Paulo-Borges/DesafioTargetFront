import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestPage } from './interest.page';

describe('InterestPage', () => {
  let component: InterestPage;
  let fixture: ComponentFixture<InterestPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestPage],
    }).compileComponents();

    fixture = TestBed.createComponent(InterestPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
