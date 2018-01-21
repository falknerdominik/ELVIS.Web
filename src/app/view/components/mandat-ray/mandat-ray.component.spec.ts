import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandatRayComponent } from './mandat-ray.component';

describe('MandatRayComponent', () => {
  let component: MandatRayComponent;
  let fixture: ComponentFixture<MandatRayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandatRayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandatRayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
