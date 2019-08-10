import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbButtonDemoComponent } from './dumb-button-demo.component';

describe('DumbButtonDemoComponent', () => {
  let component: DumbButtonDemoComponent;
  let fixture: ComponentFixture<DumbButtonDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumbButtonDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DumbButtonDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
