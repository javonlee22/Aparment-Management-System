import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAptComponent } from './add-apt.component';

describe('AddAptComponent', () => {
  let component: AddAptComponent;
  let fixture: ComponentFixture<AddAptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
