import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  playStream(livestream: HTMLIFrameElement): void {
    const playButton = livestream.querySelector('.clickContainer');
    if (playButton instanceof HTMLButtonElement) {
      playButton.click();
    }
  }
}
