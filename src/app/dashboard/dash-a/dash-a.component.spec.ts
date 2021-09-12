import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAComponent } from './dash-a.component';

describe('DashAComponent', () => {
  let component: DashAComponent;
  let fixture: ComponentFixture<DashAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
