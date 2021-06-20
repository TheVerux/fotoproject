import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio-files',
  templateUrl: './portfolio-files.component.html',
  styleUrls: ['./portfolio-files.component.scss']
})
export class PortfolioFilesComponent implements OnInit {

  @Input()
  name!: string;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  getFileUrl(fileName: string): SafeResourceUrl {
    const url = `/assets/doc/${this.name}/${fileName}.pdf`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
