import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {

  @Input()
  image: string;

  @Input()
  before: string;

  @Input()
  alt: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
