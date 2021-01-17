import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigofacilitoComponent } from './codigofacilito.component';

describe('CodigofacilitoComponent', () => {
  let component: CodigofacilitoComponent;
  let fixture: ComponentFixture<CodigofacilitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodigofacilitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigofacilitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
