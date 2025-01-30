import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalPostComponent } from './animal-post.component';

describe('AnimalPostComponent', () => {
  let component: AnimalPostComponent;
  let fixture: ComponentFixture<AnimalPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
