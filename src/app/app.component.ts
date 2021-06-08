import {Component, OnInit} from '@angular/core';
import {faLightbulb} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'm152';
  faLight = faLightbulb;
  darkmode = false;

  ngOnInit(): void {
    if (localStorage.getItem('darkmode')) {
      this.toggleDarkmode();
    }
  }

  toggleDarkmode(): void {
    this.darkmode = !this.darkmode;
    // @ts-ignore
    halfmoon.toggleDarkMode();

    if (this.darkmode) {
      localStorage.setItem('darkmode', 'true');
    } else {
      localStorage.removeItem('darkmode');
    }
  }
}
