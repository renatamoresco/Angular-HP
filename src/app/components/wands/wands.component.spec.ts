import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WandsComponent } from './wands.component';

describe('WandsComponent', () => {
  let component: WandsComponent;
  let fixture: ComponentFixture<WandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
