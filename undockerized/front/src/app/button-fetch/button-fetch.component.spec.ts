import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFetchComponent } from './button-fetch.component';

describe('ButtonFetchComponent', () => {
  let component: ButtonFetchComponent;
  let fixture: ComponentFixture<ButtonFetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonFetchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
