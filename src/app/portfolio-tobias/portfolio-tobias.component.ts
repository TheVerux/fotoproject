import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio-tobias',
  templateUrl: './portfolio-tobias.component.html',
  styleUrls: ['./portfolio-tobias.component.scss']
})
export class PortfolioTobiasComponent implements OnInit {

  @Input()
  featured!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
