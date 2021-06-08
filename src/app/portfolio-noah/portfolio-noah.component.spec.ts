import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioNoahComponent } from './portfolio-noah.component';

describe('PortfolioNoahComponent', () => {
  let component: PortfolioNoahComponent;
  let fixture: ComponentFixture<PortfolioNoahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioNoahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioNoahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
