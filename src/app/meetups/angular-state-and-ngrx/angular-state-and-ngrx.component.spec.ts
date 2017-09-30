import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularStateAndNgrxComponent } from './angular-state-and-ngrx.component';

describe('AngularStateAndNgrxComponent', () => {
  let component: AngularStateAndNgrxComponent;
  let fixture: ComponentFixture<AngularStateAndNgrxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularStateAndNgrxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularStateAndNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
