import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioRaphaelComponent } from './portfolio-raphael.component';

describe('PortfolioRaphaelComponent', () => {
  let component: PortfolioRaphaelComponent;
  let fixture: ComponentFixture<PortfolioRaphaelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioRaphaelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioRaphaelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
