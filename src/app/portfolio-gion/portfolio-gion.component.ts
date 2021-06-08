import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio-gion',
  templateUrl: './portfolio-gion.component.html',
  styleUrls: ['./portfolio-gion.component.scss']
})
export class PortfolioGionComponent implements OnInit {

  @Input()
  featured!: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
