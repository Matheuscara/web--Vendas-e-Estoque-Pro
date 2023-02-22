import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabLateralComponent } from './TabLateralComponent';

describe('TabLateralComponent', () => {
  let component: TabLateralComponent;
  let fixture: ComponentFixture<TabLateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabLateralComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
