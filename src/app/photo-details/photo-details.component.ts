import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {

  @Input()
  iso: string;

  @Input()
  focalLength: string;

  @Input()
  aperture: string;

  @Input()
  shutterSpeed: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
