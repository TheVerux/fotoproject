import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTobiasComponent } from './portfolio-tobias.component';

describe('PortfolioTobiasComponent', () => {
  let component: PortfolioTobiasComponent;
  let fixture: ComponentFixture<PortfolioTobiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioTobiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioTobiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
