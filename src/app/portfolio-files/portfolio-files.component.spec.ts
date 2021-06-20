import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFilesComponent } from './portfolio-files.component';

describe('PortfolioFilesComponent', () => {
  let component: PortfolioFilesComponent;
  let fixture: ComponentFixture<PortfolioFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
