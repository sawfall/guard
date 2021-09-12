import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBComponent } from './dash-b.component';

describe('DashBComponent', () => {
  let component: DashBComponent;
  let fixture: ComponentFixture<DashBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
