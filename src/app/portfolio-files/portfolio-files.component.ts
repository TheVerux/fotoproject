import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio-files',
  templateUrl: './portfolio-files.component.html',
  styleUrls: ['./portfolio-files.component.scss']
})
export class PortfolioFilesComponent implements OnInit {

  @Input()
  name!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
