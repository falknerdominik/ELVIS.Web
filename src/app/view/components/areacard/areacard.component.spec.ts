import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreacardComponent } from './areacard.component';

describe('AreacardComponent', () => {
  let component: AreacardComponent;
  let fixture: ComponentFixture<AreacardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreacardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreacardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
