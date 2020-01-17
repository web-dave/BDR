import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  PreloadAllModules,
  NoPreloading
} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PreloadDelayed } from './shared/preload-delayed';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
    data: {
      preload: true,
      delay: 1500
    }
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule),
    data: {
      preload: true,
      delay: 2500
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      preloadingStrategy: PreloadDelayed
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
