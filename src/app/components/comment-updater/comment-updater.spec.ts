import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentUpdater } from './comment-updater';

describe('CommentUpdater', () => {
  let component: CommentUpdater;
  let fixture: ComponentFixture<CommentUpdater>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentUpdater]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentUpdater);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
