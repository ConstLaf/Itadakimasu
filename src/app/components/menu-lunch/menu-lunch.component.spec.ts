import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLunchComponent } from './menu-lunch.component';

describe('MenuLunchComponent', () => {
  let component: MenuLunchComponent;
  let fixture: ComponentFixture<MenuLunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLunchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
