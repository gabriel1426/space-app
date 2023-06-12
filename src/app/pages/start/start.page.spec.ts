import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartPage } from './start.page';

describe('HomePage', () => {
  let component: StartPage;
  let fixture: ComponentFixture<StartPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
