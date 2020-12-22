import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrescosComponent } from './refrescos.component';

describe('RefrescosComponent', () => {
  let component: RefrescosComponent;
  let fixture: ComponentFixture<RefrescosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefrescosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrescosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
