import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioGionComponent } from './portfolio-gion.component';

describe('PortfolioGionComponent', () => {
  let component: PortfolioGionComponent;
  let fixture: ComponentFixture<PortfolioGionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioGionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioGionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
