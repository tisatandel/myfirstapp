import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitGallery } from './fruit-gallery';

describe('FruitGallery', () => {
  let component: FruitGallery;
  let fixture: ComponentFixture<FruitGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitGallery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
