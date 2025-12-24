import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirementPage } from './retirement-page';

describe('RetirementPage', () => {
  let component: RetirementPage;
  let fixture: ComponentFixture<RetirementPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetirementPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetirementPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
