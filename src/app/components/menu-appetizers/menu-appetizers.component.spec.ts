import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAppetizersComponent } from './menu-appetizers.component';

describe('MenuAppetizersComponent', () => {
  let component: MenuAppetizersComponent;
  let fixture: ComponentFixture<MenuAppetizersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAppetizersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAppetizersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
