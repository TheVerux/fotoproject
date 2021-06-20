import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {PortfolioTobiasComponent} from './portfolio-tobias/portfolio-tobias.component';
import {PortfolioGionComponent} from './portfolio-gion/portfolio-gion.component';
import {PortfolioNoahComponent} from './portfolio-noah/portfolio-noah.component';
import {PortfolioRaphaelComponent} from './portfolio-raphael/portfolio-raphael.component';
import {PortfolioOverviewComponent} from './portfolio-overview/portfolio-overview.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent
  },
  {
    path: 'portfolio',
    component: PortfolioOverviewComponent
  },
  {
    path: 'portfolio/tobias',
    component: PortfolioTobiasComponent
  },
  {
    path: 'portfolio/gion',
    component: PortfolioGionComponent
  },
  {
    path: 'portfolio/noah',
    component: PortfolioNoahComponent
  },
  {
    path: 'portfolio/raphael',
    component: PortfolioRaphaelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
