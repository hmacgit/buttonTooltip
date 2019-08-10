import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartButtonDemoComponent } from './smart-button-demo.component';

describe('SmartButtonDemoComponent', () => {
  let component: SmartButtonDemoComponent;
  let fixture: ComponentFixture<SmartButtonDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartButtonDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartButtonDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
