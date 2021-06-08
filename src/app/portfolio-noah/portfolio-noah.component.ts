import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio-noah',
  templateUrl: './portfolio-noah.component.html',
  styleUrls: ['./portfolio-noah.component.scss']
})
export class PortfolioNoahComponent implements OnInit {

  @Input()
  featured!: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
