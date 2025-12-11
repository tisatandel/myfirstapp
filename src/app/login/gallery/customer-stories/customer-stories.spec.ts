import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerStories } from './customer-stories';

describe('CustomerStories', () => {
  let component: CustomerStories;
  let fixture: ComponentFixture<CustomerStories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerStories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerStories);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
