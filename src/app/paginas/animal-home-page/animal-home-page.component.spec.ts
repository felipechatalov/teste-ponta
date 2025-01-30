import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalHomePageComponent } from './animal-home-page.component';

describe('AnimalHomePageComponent', () => {
  let component: AnimalHomePageComponent;
  let fixture: ComponentFixture<AnimalHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
