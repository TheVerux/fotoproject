import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioOverviewCardComponent } from './portfolio-overview-card.component';

describe('PortfolioOverviewCardComponent', () => {
  let component: PortfolioOverviewCardComponent;
  let fixture: ComponentFixture<PortfolioOverviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioOverviewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioOverviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
