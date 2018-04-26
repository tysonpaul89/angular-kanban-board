import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoingListComponent } from './doing-list.component';

describe('DoingListComponent', () => {
  let component: DoingListComponent;
  let fixture: ComponentFixture<DoingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
