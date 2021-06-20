import {Component, OnInit} from '@angular/core';
import {faAngleDown, faArrowDown, faLightbulb} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'm152';
  faLight = faLightbulb;
  faArrowDown = faAngleDown;
  darkmode = false;


  constructor(private router: Router) {
  }

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

  isActive(route: string, exact: boolean): boolean {
    return this.router.isActive(route, exact);
  }
}
