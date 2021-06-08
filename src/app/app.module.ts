import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortfolioTobiasComponent } from './portfolio-tobias/portfolio-tobias.component';
import { PortfolioGionComponent } from './portfolio-gion/portfolio-gion.component';
import { PortfolioNoahComponent } from './portfolio-noah/portfolio-noah.component';
import { PortfolioRaphaelComponent } from './portfolio-raphael/portfolio-raphael.component';
import { PhotoCardComponent } from './photo-card/photo-card.component';
import { PhotoGridComponent } from './photo-grid/photo-grid.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    PortfolioTobiasComponent,
    PortfolioGionComponent,
    PortfolioNoahComponent,
    PortfolioRaphaelComponent,
    PhotoCardComponent,
    PhotoGridComponent,
    PhotoDetailsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        MatIconModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
