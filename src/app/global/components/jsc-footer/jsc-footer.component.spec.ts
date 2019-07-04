import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JscFooterComponent } from './jsc-footer.component';

describe('JscFooterComponent', () => {
  let component: JscFooterComponent;
  let fixture: ComponentFixture<JscFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JscFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JscFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
