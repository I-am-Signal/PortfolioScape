import { Routes } from '@angular/router';
import { Page } from './models/page.type';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
  {
    path: 'portfolio',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/portfolio/portfolio.component').then(
        (m) => m.PortfolioComponent
      ),
  },
  {
    path: 'resume',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/resume/resume.component').then(
        (m) => m.ResumeComponent
      ),
  },
];

// First page is always the home page
export const pages: Page[] = routes.map((route) => ({
  title: route.path ? route.path : '',
  url: route.path ? route.path : '',
})).slice(1);