import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivicosComponent } from './civicos.component';

describe('CivicosComponent', () => {
  let component: CivicosComponent;
  let fixture: ComponentFixture<CivicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
