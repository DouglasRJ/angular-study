import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorDepartmentsComponent } from './navigator-departments.component';

describe('NavigatorDepartmentsComponent', () => {
  let component: NavigatorDepartmentsComponent;
  let fixture: ComponentFixture<NavigatorDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigatorDepartmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigatorDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
