import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio-raphael',
  templateUrl: './portfolio-raphael.component.html',
  styleUrls: ['./portfolio-raphael.component.scss']
})
export class PortfolioRaphaelComponent implements OnInit {

  @Input()
  featured!: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
