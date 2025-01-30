import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalReadComponent } from './animal-read.component';

describe('AnimalReadComponent', () => {
  let component: AnimalReadComponent;
  let fixture: ComponentFixture<AnimalReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalReadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
