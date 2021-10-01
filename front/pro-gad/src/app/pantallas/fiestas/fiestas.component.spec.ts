import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiestasComponent } from './fiestas.component';

describe('FiestasComponent', () => {
  let component: FiestasComponent;
  let fixture: ComponentFixture<FiestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiestasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
