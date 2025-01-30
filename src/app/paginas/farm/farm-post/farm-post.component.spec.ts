import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmPostComponent } from './farm-post.component';

describe('FarmPostComponent', () => {
  let component: FarmPostComponent;
  let fixture: ComponentFixture<FarmPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
