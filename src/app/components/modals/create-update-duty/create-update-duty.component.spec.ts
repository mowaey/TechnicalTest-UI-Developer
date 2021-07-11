import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateDutyComponent } from './create-update-duty.component';

describe('CreateUpdateDutyComponent', () => {
  let component: CreateUpdateDutyComponent;
  let fixture: ComponentFixture<CreateUpdateDutyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUpdateDutyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateDutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
