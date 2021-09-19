import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsjektComponent } from './prosjekt.component';

describe('ProsjektComponent', () => {
  let component: ProsjektComponent;
  let fixture: ComponentFixture<ProsjektComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProsjektComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsjektComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
