import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio-overview-card',
  templateUrl: './portfolio-overview-card.component.html',
  styleUrls: ['./portfolio-overview-card.component.scss']
})
export class PortfolioOverviewCardComponent implements OnInit {

  @Input()
  image: string;

  @Input()
  name: string;

  @Input()
  route: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
