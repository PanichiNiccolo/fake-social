import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveSection } from './interactive-section';

describe('InteractiveSection', () => {
  let component: InteractiveSection;
  let fixture: ComponentFixture<InteractiveSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractiveSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
