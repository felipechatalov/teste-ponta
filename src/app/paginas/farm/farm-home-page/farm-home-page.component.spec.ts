import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmHomePageComponent } from './farm-home-page.component';

describe('FarmHomePageComponent', () => {
  let component: FarmHomePageComponent;
  let fixture: ComponentFixture<FarmHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
